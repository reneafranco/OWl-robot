import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="body-font" id="about">
      <div className="container px-5 py-8 mx-auto flex  justify-center">
        <h1 className="text-4xl">Contact Us </h1>
      </div>
      <ContactForm />
      <div className="container mx-auto text-center w-1/6 pt-8">
        <div className=" float-left mx-2">
          <h1 className="float-left text-2xl">See you</h1>
        </div>
        <div className="float-left text-2xl">
          <h1>Soon !!!</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
