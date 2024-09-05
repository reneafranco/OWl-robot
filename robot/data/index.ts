export interface City {
  id: string;
  name: string;
  population: string;
  yearIncorporated: string;
  region: string;
  classification: string;
  averageIncome: string;
  imageUrl: string;
  altText: string;
}

export const CITIES: City[] = [
  {
    id: "1",
    name: "Metropolis",
    population: "1,000,000",
    yearIncorporated: "1850",
    region: "Central",
    classification: "Urban",
    averageIncome: "30% above state average",
    imageUrl: "https://dummyimage.com/720x600/000/fff",
    altText: "View of Metropolis skyline",
  },
  {
    id: "2",
    name: "Smalltown",
    population: "15,000",
    yearIncorporated: "1900",
    region: "Southern",
    classification: "Suburban",
    averageIncome: "10% below state average",
    imageUrl: "https://dummyimage.com/720x600/111/fff",
    altText: "Scenic view of Smalltown",
  },
  {
    id: "3",
    name: "Village",
    population: "5,000",
    yearIncorporated: "2000",
    region: "Northern",
    classification: "Rural",
    averageIncome: "5% below state average",
    imageUrl: "https://dummyimage.com/720x600/222/fff",
    altText: "Countryside view of Village",
  },
];

export const cities = CITIES.map((city) => ({
  id: parseInt(city.id),
  category: `Category ${city.id}`,
  title: city.name,
  description: `Population: ${city.population}, Year Incorporated: ${city.yearIncorporated}, Region: ${city.region}, Classification: ${city.classification}, Average Income: ${city.averageIncome}`,
  link: `/cities/${city.id}`,
  icon: city.name.charAt(0),
  reviews: 6,
}));
