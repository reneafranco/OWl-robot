import React from "react";
import { ModeToggle } from "./model-toggle";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-[20] body-font shadow-md bg-white dark:bg-customColor ">
      <div className="container mx-auto flex flex-wrap p-5 items-center">
        <a className="flex title-font font-medium items-center md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>

          <span className="ml-3 text-xl sm:block hidden">Rene Project</span>
        </a>

        <nav className="flex-grow flex items-center justify-center">
          <a className="mr-5 hover:text-blue-500">Home</a>
          <a className="mr-5 hover:text-blue-500">About</a>
          <a className="mr-5 hover:text-blue-500">Contact</a>
        </nav>
        <div className="flex items-center ml-auto ">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
