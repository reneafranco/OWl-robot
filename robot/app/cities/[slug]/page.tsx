import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CITIES } from "@/data";

const page = ({ params }: { params: { slug: string } }) => {
  const cityId = params.slug;

  const city = CITIES.find((city) => city.id === cityId);

  if (!city) {
    return <p>Not Found </p>;
  }
  return (
    <section className="body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font tracking-widest text-gray-500 dark:text-gray-400">
              BRAND NAME
            </h2>
            <h1 className="text-3xl title-font font-medium mb-4 text-gray-900 dark:text-gray-100">
              {city.name}
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p className="leading-relaxed mb-4 text-gray-600 dark:text-gray-300">
              {city.description}
            </p>
            <div className="flex border-t border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-500 dark:text-gray-400">Color</span>
              <span className="ml-auto text-gray-900 dark:text-gray-100">
                data
              </span>
            </div>
            <div className="flex border-t border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-500 dark:text-gray-400">Size</span>
              <span className="ml-auto text-gray-900 dark:text-gray-100">
                data
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 dark:border-gray-700 py-2">
              <span className="text-gray-500 dark:text-gray-400">Quantity</span>
              <span className="ml-auto text-gray-900 dark:text-gray-100">
                data
              </span>
            </div>
            <div className="flex">
              <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                <Link href="/cities"> Go Back</Link>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
            <Image
              alt="ecommerce"
              src={city.imageUrl}
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
