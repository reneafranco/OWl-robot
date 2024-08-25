export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

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
  {
    id: "4",
    name: "City Four",
    description: "Description for City Four",
    imageUrl: "https://dummyimage.com/720x600/222/fff",
  },
];
