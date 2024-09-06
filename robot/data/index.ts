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
  populationDensity: string;
  area: string;
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
    populationDensity: "2,500 people/km²",
    area: "400 km²",
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
    populationDensity: "300 people/km²",
    area: "50 km²",
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
    populationDensity: "50 people/km²",
    area: "100 km²",
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
