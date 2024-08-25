import React from "react";
import { CITIES } from "@/data";

const page = ({ params }: { params: { slug: string } }) => {
  const cityId = params.slug;

  const city = CITIES.find((city) => city.id === cityId);

  if (!city) {
    return <p>Not Found </p>;
  }

  return (
    <div>
      <h1>{params.slug}</h1>

      <h1>{city.name}</h1>
    </div>
  );
};

export default page;
