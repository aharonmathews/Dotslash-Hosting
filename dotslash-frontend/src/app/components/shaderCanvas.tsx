"use client"; 
import React from "react";
import { Canvas } from "@react-three/fiber";
import ShaderImage from "./glitchImage";
import countdownImage from "../assets/countdown.png"

interface ShaderCanvasProps {
  image: string;
}

const ShaderCanvas: React.FC<ShaderCanvasProps> = (image) => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ShaderImage imageUrl={image.image} />
    </Canvas>
  );
};

export default ShaderCanvas;
