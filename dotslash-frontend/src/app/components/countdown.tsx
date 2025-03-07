import React from "react";
import ShaderCanvas from "./shaderCanvas"; 

const CountDown: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <ShaderCanvas image="/countdown.png" />
    </main>
  );
};

export default CountDown;
