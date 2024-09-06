export interface City {
  id: string;
  name: string;
  description: string;
  population: string;
  yearIncorporated: string;
  region: string;
  classification: string;
  averageIncome: string;
  imageUrl: string;
  altText: string;
  populationDensity: string;
  area: string;
}

export const CITIES: City[] = [
  {
    id: "1",
    name: "Des Moines",
    description:
      "Capital city of Iowa, known for its vibrant cultural scene and bustling downtown.",
    population: "214,000",
    yearIncorporated: "1851",
    region: "Central",
    classification: "Urban",
    averageIncome: "30% above state average",
    imageUrl: "/des-moines.webp",
    altText: "View of Des Moines skyline",
    populationDensity: "1,750 people/km²",
    area: "217 km²",
  },
  {
    id: "2",
    name: "Cedar Rapids",
    description:
      "A city known for its historic downtown and vibrant arts community.",
    population: "133,000",
    yearIncorporated: "1849",
    region: "Eastern",
    classification: "Urban",
    averageIncome: "10% below state average",
    imageUrl: "/cedar-rapids.jpg",
    altText: "View of Cedar Rapids skyline",
    populationDensity: "1,200 people/km²",
    area: "174 km²",
  },
  {
    id: "3",
    name: "Davenport",
    description:
      "Part of the Quad Cities region, known for its historical landmarks and riverfront.",
    population: "102,000",
    yearIncorporated: "1836",
    region: "Eastern",
    classification: "Urban",
    averageIncome: "5% below state average",
    imageUrl: "/davenport.jpeg",
    altText: "View of Davenport skyline",
    populationDensity: "950 people/km²",
    area: "160 km²",
  },
];

export const cities = CITIES.map((city) => ({
  id: parseInt(city.id),
  category: `Category ${city.id}`,
  title: city.name,
  description: `Population: ${city.population}, Year Incorporated: ${city.yearIncorporated}, Region: ${city.region}, Classification: ${city.classification}, Average Income: ${city.averageIncome}, Population Density: ${city.populationDensity}, Area: ${city.area}`,
  link: `/cities/${city.id}`,
  icon: city.name.charAt(0),
  reviews: 6,
}));
