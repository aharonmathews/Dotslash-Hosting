"use client"; 
import React from "react";
import { Canvas } from "@react-three/fiber";
import ShaderImage from "./glitchImage";
import countdownImage from "../assets/countdown.png"

const ShaderCanvas: React.FC<{ image: string }> = ({ image: string }) => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ShaderImage imageUrl="/countdown.png" />
    </Canvas>
  );
};

export default ShaderCanvas;
