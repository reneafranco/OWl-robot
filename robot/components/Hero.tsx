import React from "react";
import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div
      className="grid sm:grid-cols-12 grid-cols-1 gap-4
      h-screen w-screen mx-2"
    >
      <div
        className="min-h-[100px] bg-blue-500 rounded-lg shadow sm:col-span-2
        sm:block hidden"
      ></div>
      <div
        className="relative min-h-[100px] bg-blue-500 rounded-lg shadow sm:col-span-8 
        sm:block"
      >
        <div className="mt-4 relative z-10">
          <h1>WELCOME DEVELOPER</h1>
        </div>
        <div className=" absolute top-0 left-0 right-0 bottom-0">
          <Spline scene="https://prod.spline.design/iVFfKSjg8whvJclY/scene.splinecode" />
        </div>
      </div>
      <div
        className="min-h-[100px] bg-blue-500 rounded-lg shadow sm:col-span-2
        sm:block hidden"
      ></div>
    </div>
  );
};

export default Hero;
