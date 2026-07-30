"use client";

import { Canvas } from "@react-three/fiber";
import { BurgerModel } from "./burger-model";

export default function BurgerCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.9, 10.2], fov: 38, near: 0.1, far: 100 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <hemisphereLight args={["#fff2e0", "#5a0010", 0.85]} />
      <directionalLight color="#ffffff" intensity={2.1} position={[4, 6, 5]} />
      <pointLight color="#ff2b4d" intensity={26} distance={22} position={[-5, -1.5, 3]} />
      <BurgerModel />
    </Canvas>
  );
}
