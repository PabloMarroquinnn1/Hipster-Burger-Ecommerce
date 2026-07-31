"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FREE_DELIVERY_FROM,
  selectDeliveryFee,
  selectSubtotal,
  selectTotal,
  useCartStore,
} from "@/stores/cart-store";

export function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const lines = useCartStore((state) => state.lines);
  const confirmed = useCartStore((state) => state.confirmed);
  const closeCart = useCartStore((state) => state.closeCart);
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const checkout = useCartStore((state) => state.checkout);
  const subtotal = useCartStore(selectSubtotal);
  const deliveryFee = useCartStore(selectDeliveryFee);
  const total = useCartStore(selectTotal);
  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-on-surface/70 z-[90]" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-full max-w-md bg-surface border-l-4 border-on-surface hard-shadow-red z-[100] flex flex-col outline-none">
          <Dialog.Description className="sr-only">
            Resumen de tu pedido, cantidad por producto y checkout.
          </Dialog.Description>

          <div className="flex items-center justify-between gap-4 px-6 py-5 bg-on-surface text-surface">
            <div>
              <Dialog.Title className="font-heading text-headline-md uppercase">
                Tu pedido
              </Dialog.Title>
              <p className="font-label text-label-mono uppercase text-surface-variant mt-1">
                {itemCount === 0 ? "Vacío" : `${itemCount} producto(s)`}
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Cerrar carrito"
                className="w-10 h-10 grid place-items-center border-2 border-surface rounded-full hover:bg-primary hover:border-primary transition-colors"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {lines.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-heading text-headline-md uppercase">Todavía no hay nada</p>
                <p className="mt-3 text-body-md text-on-surface-variant max-w-[26ch] mx-auto">
                  Elegí algo del menú y lo vas a ver aparecer acá.
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-4">
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="tilt-slight-right flex items-center justify-between gap-4 bg-surface-container border-4 border-on-surface hard-shadow p-4"
                  >
                    <div>
                      <div className="font-heading text-xl uppercase">{line.name}</div>
                      <div className="font-label text-label-mono text-on-surface-variant">
                        Q{line.price} c/u
                      </div>
                      <div className="mt-2 inline-flex items-center gap-1 border-2 border-on-surface rounded-full p-1">
                        <button
                          type="button"
                          aria-label="Quitar uno"
                          onClick={() => decrementItem(line.id)}
                          className="w-8 h-8 grid place-items-center hover:bg-surface-variant rounded-full transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="min-w-[1.5rem] text-center font-heading text-lg">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Agregar uno"
                          onClick={() => incrementItem(line.id)}
                          className="w-8 h-8 grid place-items-center hover:bg-surface-variant rounded-full transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-heading text-xl">Q{line.price * line.quantity}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        aria-label={`Quitar ${line.name}`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-6 py-6 bg-surface-container-low border-t-4 border-on-surface">
            <div className="flex justify-between text-body-md text-on-surface-variant">
              <span>Subtotal</span>
              <span>Q{subtotal}</span>
            </div>
            <div className="flex justify-between text-body-md text-on-surface-variant mt-1">
              <span>Entrega</span>
              <span>{deliveryFee === 0 ? "Gratis" : `Q${deliveryFee}`}</span>
            </div>
            {subtotal > 0 && subtotal < FREE_DELIVERY_FROM && (
              <p className="mt-2 text-xs text-on-surface-variant">
                Envío gratis desde Q{FREE_DELIVERY_FROM}.
              </p>
            )}
            <div className="flex justify-between items-baseline mt-3 pt-3 border-t border-outline-variant">
              <span className="font-heading text-xl uppercase">Total</span>
              <span className="font-heading text-3xl">Q{total}</span>
            </div>
            <Button
              type="button"
              variant="primary"
              onClick={checkout}
              disabled={lines.length === 0}
              className="w-full justify-center mt-4 disabled:opacity-50 disabled:pointer-events-none"
            >
              Pagar ahora
            </Button>
            {confirmed && (
              <p className="mt-3 text-center text-body-md">
                ¡Pedido enviado! Te escribimos para confirmar la entrega.
              </p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
