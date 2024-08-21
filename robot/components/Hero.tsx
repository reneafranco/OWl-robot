import React from "react";
import Spline from "@splinetool/react-spline/next";
const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-36">
      <div>
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/iVFfKSjg8whvJclY/scene.splinecode" />
        </div>
        <div className="flex justify-center items-center">
          <h1> Rene Project</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
