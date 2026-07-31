"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const BurgerCanvas = dynamic(() => import("./burger-canvas"), { ssr: false });

/** Static stand-in for reduced-motion, low-power, or narrow viewports. */
function BurgerFallback() {
  return (
    <div className="float-constant flex flex-col items-center" aria-hidden="true">
      <div className="w-56 h-14 rounded-t-full bg-[#e0a655] border-4 border-on-surface hard-shadow" />
      <div className="w-60 h-2 -mt-1 bg-[#f5b21c]" />
      <div className="w-60 h-8 -mt-1 bg-[#50291a] border-x-4 border-on-surface" />
      <div className="w-60 h-2 -mt-1 bg-[#f5b21c]" />
      <div className="w-60 h-8 -mt-1 bg-[#50291a] border-x-4 border-on-surface" />
      <div className="w-56 h-8 -mt-1 rounded-b-2xl bg-[#d79a4c] border-4 border-t-0 border-on-surface hard-shadow" />
    </div>
  );
}

export function HeroScene({ enable3d = true }: { enable3d?: boolean }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  // Narrow viewports fall back to CSS for performance (WebGL on low-power
  // phones), not for reduced-motion — that only stops the rotation below,
  // it doesn't replace the 3D model with the flatter static fallback.
  const isDesktopViewport = useMediaQuery("(min-width: 768px)");
  const use3d = enable3d && isDesktopViewport;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {use3d ? <BurgerCanvas spinSpeed={prefersReducedMotion ? 0 : 1} /> : <BurgerFallback />}
    </div>
  );
}
