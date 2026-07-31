"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";

function formatPlacedAt(timestamp: number) {
  return new Date(timestamp).toLocaleString("es-GT", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function InvoiceView() {
  const order = useCartStore((state) => state.lastOrder);
  const startNewOrder = useCartStore((state) => state.startNewOrder);

  if (!order) return null;

  return (
    <div className="py-6">
      <div className="text-center mb-6">
        <p className="font-label text-label-mono uppercase text-on-surface-variant tracking-widest">
          Factura
        </p>
        <p className="mt-1 font-heading text-headline-md uppercase">Pedido #{order.id}</p>
        <p className="mt-1 text-xs text-on-surface-variant">{formatPlacedAt(order.placedAt)}</p>
      </div>

      <div className="border-4 border-on-surface hard-shadow bg-surface-container-lowest p-5">
        <ul className="flex flex-col divide-y divide-surface-variant">
          {order.lines.map((line) => (
            <li key={line.id} className="flex justify-between py-2.5 text-body-md">
              <span>
                {line.quantity}× {line.name}
              </span>
              <span>Q{line.price * line.quantity}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 pt-3 border-t border-surface-variant flex flex-col gap-1 text-body-md text-on-surface-variant">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Q{order.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Entrega</span>
            <span>{order.deliveryFee === 0 ? "Gratis" : `Q${order.deliveryFee}`}</span>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-on-surface flex justify-between items-baseline">
          <span className="font-heading text-xl uppercase">Total</span>
          <span className="font-heading text-3xl">Q{order.total}</span>
        </div>
      </div>

      <Button
        type="button"
        variant="primary"
        onClick={startNewOrder}
        className="w-full justify-center mt-6"
      >
        Hacer otro pedido
      </Button>
    </div>
  );
}
