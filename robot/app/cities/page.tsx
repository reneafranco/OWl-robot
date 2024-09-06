import React from "react";
import Image from "next/image";
import { CITIES } from "../../data/index";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {CITIES.map((city) => (
            <div key={city.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={city.imageUrl}
                  alt={city.name}
                  width={720}
                  height={400}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium mb-3">
                    {city.name}
                  </h1>
                  <p className="leading-relaxed mb-3">{city.description}</p>
                  <div className="flex items-center flex-wrap">
                    <Link
                      href={`/cities/${city.id}`}
                      className=" text-blue-500 inline-flex items-center md:mb-2 lg:mb-0"
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
          <Link href="/">Go Back</Link>
        </button>
      </div>
    </section>
  );
};

export default Page;
