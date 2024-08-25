import React from "react";
import Spline from "@splinetool/react-spline/next";

const Hero = () => {
  return (
    <div
      className="grid  min-h-screen grid-cols-1  gap-4

      mx-2"
      id="home"
    >
      <div
        className="relative min-h-[100px] 
        sm:block"
      >
        <div>
          <div className=" mt-20 flex flex-col items-center text-center">
            <h1 className="title-font md:text-6xl sm:text-5xl text-4xl font-medium text-gray-900 dark:text-white">
              Welcome to Iowa
            </h1>
            <div className="ml-44">
              <h1 className="sm:tx-4xl text-3xl text-gray-900 dark:text-white">
                Welcome to Iowa
              </h1>
              <h3 className="md:block hidden text-gray-600 dark:text-white-200 pl-20">
                Hover the owl head{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className=" absolute top-0 left-0 right-0 bottom-0">
          <Spline scene="https://prod.spline.design/iVFfKSjg8whvJclY/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
