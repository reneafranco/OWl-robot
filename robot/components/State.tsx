import React from "react";
import { cities } from "../data/index";
import Image from "next/image";

const State = () => {
  return (
    <div>
      <section className="body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded relative">
              <Image
                alt="Iowa"
                src="/Iowa-state.jpg"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font tracking-widest text-gray-500 dark:text-gray-400">
                City of Joy
              </h2>
              <h1 className="text-3xl title-font font-medium mb-1 text-gray-900 dark:text-gray-100">
                Iowa State
              </h1>
              <p className="leading-relaxed pt-6 sm:text-xl text-gray-600 dark:text-gray-300">
                Iowa, located in the Midwestern region of the United States, is
                known for its rich agricultural heritage and vibrant cultural
                scene. The state features expansive farmlands, historic small
                towns, and a commitment to education and innovation. Iowa offers
                a blend of natural beauty and bustling urban centers, making it
                a unique and dynamic place to live and visit.
              </p>
              <div className="pt-3  text-gray-600 dark:text-gray-300">
                <ol className="list-decimal pl-5 mb-2">
                  <li>Population: Over 3 million</li>
                  <li>Capital: Des Moines</li>
                  <li>
                    Known for: Agriculture, particularly corn and soybeans
                  </li>
                </ol>
                <ul className="list-disc pl-5 mb-4">
                  <li>Historic landmarks such as the Iowa State Capitol</li>
                  <li>Vibrant cultural festivals and fairs</li>
                  <li>Beautiful natural parks and recreational areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font dark:text-gray-300">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-gray-100 mb-4">
              Discover the Beauty of Iowa
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Iowa, known for its picturesque landscapes and charming small
              towns, offers a unique blend of natural beauty and vibrant
              culture. From rolling farmlands to bustling urban centers, Iowa is
              a place where tradition meets modernity.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Rolling Farmlands
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Charming Small Towns
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Vibrant Cultural Scene
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Scenic Trails and Parks
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Historical Landmarks
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 dark:bg-gray-800 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  Friendly Communities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="body-font">
        <div className="container  py-10 mx-auto">
          <div className="flex flex-wrap justify-center">
            {cities.map((city) => (
              <div key={city.id} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 dark:text-gray-500">
                    {city.category}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 dark:text-gray-100">
                    {city.title}
                  </h1>
                  <p className="leading-relaxed mb-3 dark:text-gray-400">
                    {city.description}
                  </p>
                  <a
                    target="_blank"
                    href={city.link}
                    className="text-blue-500 inline-flex items-center dark:text-blue-400"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:text-gray-500 dark:border-gray-700">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {city.icon}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm dark:text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {city.reviews}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default State;
