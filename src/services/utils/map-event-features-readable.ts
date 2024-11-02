import { Features, GenericDataContent } from '../../utils/types';

export const mapEventFeaturesReadable = (features: Features): GenericDataContent[] => [
  {
    title: 'Countries',
    content: features?.countries?.sort(),
  },
  {
    title: 'Cities',
    content: features?.cities?.sort(),
  },
  {
    title: 'Airports',
    content: features?.airports?.sort(),
  },
  {
    title: 'Accommodation',
    content: features?.accommodation?.sort(),
  },
  {
    title: 'Districts And Neighborhoods',
    content: features?.districts?.sort(),
  },
  {
    title: 'Attractions',
    content: features?.attractions?.sort(),
  },
  {
    title: 'Parks',
    content: features?.parks?.sort(),
  },
  {
    title: 'Food',
    content: features?.food?.sort(),
  },
  {
    title: 'Drink',
    content: features?.drink?.sort(),
  },
  {
    title: 'Restaurants',
    content: features?.restaurants?.sort(),
  },
  {
    title: 'Bars',
    content: features?.bars?.sort(),
  },
  {
    title: 'Cafés',
    content: features?.cafes?.sort(),
  },
  {
    title: 'Bakeries And Patisseries',
    content: features?.bakeries?.sort(),
  },
  {
    title: 'Chocolatiers',
    content: features?.chocolatiers?.sort(),
  },
  {
    title: 'Gelaterias',
    content: features?.gelaterias?.sort(),
  },
  {
    title: 'Markets',
    content: features?.markets?.sort(),
  },
  {
    title: 'Supermarkets',
    content: features?.supermarkets?.sort(),
  },
  {
    title: 'Department Stores',
    content: features?.departmentStores?.sort(),
  },
  {
    title: 'Clothing And Accessory Stores',
    content: features?.clothingStores?.sort(),
  },
  {
    title: 'Interior Design Stores',
    content: features?.interiorDesignStores?.sort(),
  },
  {
    title: 'Technology Stores',
    content: features?.technologyStores?.sort(),
  },
  {
    title: 'Audio Stores',
    content: features?.audioStores?.sort(),
  },
  {
    title: 'Kitchen Stores',
    content: features?.kitchenStores?.sort(),
  },
  {
    title: 'Stationery Stores',
    content: features?.stationeryStores?.sort(),
  },
  {
    title: 'Book Stores',
    content: features?.bookStores?.sort(),
  },
  {
    title: 'Japanese Stores',
    content: features?.japaneseStores?.sort(),
  },
  {
    title: 'Bicycle Stores',
    content: features?.bicycleStores?.sort(),
  },
  {
    title: 'Outdoor Stores',
    content: features?.outdoorStores?.sort(),
  },
  {
    title: 'Tennis Stores',
    content: features?.tennisStores?.sort(),
  },
  {
    title: 'Unique Elements',
    content: features?.uniqueElements?.sort(),
  },
  {
    title: 'Nostalgia Effect',
    content: features?.nostalgiaEffect?.sort(),
  },
];
