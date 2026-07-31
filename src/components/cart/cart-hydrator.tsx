"use client";

import { useEffect } from "react";
import { useCartStore } from "@/stores/cart-store";

/** Triggers the persisted cart's rehydration after mount (see cart-store.ts). */
export function CartHydrator() {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return null;
}
