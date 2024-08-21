import React from "react";
import Spline from "@splinetool/react-spline/next";
const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-36">
      <div className="container mx-auto h-full">
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/iVFfKSjg8whvJclY/scene.splinecode" />
        </div>

        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-2xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I&apos;m <br />{" "}
            <span className="text-purple">Rene Franco</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
