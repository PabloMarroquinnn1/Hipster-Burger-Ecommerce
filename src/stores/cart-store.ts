import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export const DELIVERY_FEE = 15;
export const FREE_DELIVERY_FROM = 100;

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  confirmed: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: { id: string; name: string; price: number }) => void;
  incrementItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeItem: (id: string) => void;
  checkout: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      lines: [],
      isOpen: false,
      confirmed: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false, confirmed: false }),

      addItem: (item) =>
        set((state) => {
          const existing = state.lines.find((line) => line.id === item.id);
          const lines = existing
            ? state.lines.map((line) =>
                line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line,
              )
            : [...state.lines, { ...item, quantity: 1 }];
          return { lines, isOpen: true, confirmed: false };
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

      checkout: () => set({ confirmed: true }),
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

export const selectSubtotal = (state: CartState) =>
  state.lines.reduce((sum, line) => sum + line.price * line.quantity, 0);

export const selectDeliveryFee = (state: CartState) => {
  const subtotal = selectSubtotal(state);
  if (subtotal === 0) return 0;
  return subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;
};

export const selectTotal = (state: CartState) => selectSubtotal(state) + selectDeliveryFee(state);
