export interface City {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const CITIES: City[] = [
  {
    id: "1",
    name: "City One",
    description: "Description for City One",
    imageUrl: "https://dummyimage.com/720x600/000/fff",
  },
  {
    id: "2",
    name: "City Two",
    description: "Description for City Two",
    imageUrl: "https://dummyimage.com/720x600/111/fff",
  },
  {
    id: "3",
    name: "City Three",
    description: "Description for City Three",
    imageUrl: "https://dummyimage.com/720x600/222/fff",
  },
];

export const cities = CITIES.map((city) => ({
  id: parseInt(city.id),
  category: `Category ${city.id}`,
  title: city.name,
  description: city.description,
  link: `/cities/${city.id}`,
  icon: city.name.charAt(0),
  reviews: 6,
}));
