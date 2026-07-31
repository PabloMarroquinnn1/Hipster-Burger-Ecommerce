import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type OrderSnapshot = {
  id: string;
  lines: CartLine[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  placedAt: number;
};

export type CartView = "cart" | "tracking" | "invoice";

export const DELIVERY_FEE = 15;
export const FREE_DELIVERY_FROM = 100;

function computeTotals(lines: CartLine[]) {
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;
  return { subtotal, deliveryFee, total: subtotal + deliveryFee };
}

function generateOrderId() {
  return `${Math.floor(1000 + Math.random() * 9000)}`;
}

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  view: CartView;
  lastOrder: OrderSnapshot | null;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: { id: string; name: string; price: number }) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  checkout: () => void;
  showInvoice: () => void;
  backToCart: () => void;
  startNewOrder: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      view: "cart",
      lastOrder: null,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (item) =>
        set((state) => {
          const existing = state.lines.find((line) => line.id === item.id);
          const lines = existing
            ? state.lines.map((line) =>
                line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line,
              )
            : [...state.lines, { ...item, quantity: 1 }];
          return { lines, isOpen: true, view: "cart" };
        }),

      incrementItem: (id) =>
        set((state) => ({
          lines: state.lines.map((line) =>
            line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
          ),
        })),

      decrementItem: (id) =>
        set((state) => ({
          lines: state.lines
            .map((line) => (line.id === id ? { ...line, quantity: line.quantity - 1 } : line))
            .filter((line) => line.quantity > 0),
        })),

      removeItem: (id) =>
        set((state) => ({ lines: state.lines.filter((line) => line.id !== id) })),

      checkout: () =>
        set((state) => {
          if (state.lines.length === 0) return {};
          const { subtotal, deliveryFee, total } = computeTotals(state.lines);
          const order: OrderSnapshot = {
            id: generateOrderId(),
            lines: state.lines,
            subtotal,
            deliveryFee,
            total,
            placedAt: Date.now(),
          };
          return { lastOrder: order, lines: [], view: "tracking" };
        }),

      showInvoice: () => set({ view: "invoice" }),
      backToCart: () => set({ view: "cart" }),
      startNewOrder: () => set({ view: "cart", lastOrder: null }),
    }),
    {
      name: "smashed-cart",
      // Rehydrated manually post-mount (see CartHydrator) so the server-
      // rendered markup and the client's first render both start from the
      // same empty state — otherwise localStorage content read during the
      // client's first pass would mismatch the server HTML.
      skipHydration: true,
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
);

export const selectCartCount = (state: CartState) =>
  state.lines.reduce((sum, line) => sum + line.quantity, 0);

export const selectSubtotal = (state: CartState) => computeTotals(state.lines).subtotal;
export const selectDeliveryFee = (state: CartState) => computeTotals(state.lines).deliveryFee;
export const selectTotal = (state: CartState) => computeTotals(state.lines).total;
