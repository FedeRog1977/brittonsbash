import { getSessionItem, removeDuplicates } from '../../../../../utils';
import { Event } from '../../instant-gram/types/event';
import { Features } from '../../instant-gram/types/features';

export const compileFeatures = () => {
  const events = getSessionItem('response-events');
  const countries: string[] = [];
  const cities: string[] = [];
  const districts: string[] = [];
  const attractions: string[] = [];
  const accommodation: string[] = [];
  const supermarkets: string[] = [];
  const shops: string[] = [];
  const consumables: string[] = [];
  const cafes: string[] = [];
  const bakeries: string[] = [];
  const gelaterias: string[] = [];
  const restaurants: string[] = [];
  const bars: string[] = [];
  const nostalgiaEffect: string[] = [];

  events[2024].forEach((event: Event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.shops?.forEach((shop) => {
      shops.push(shop);
    });
    event.features?.consumables?.forEach((consumable) => {
      consumables.push(consumable);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2023].forEach((event: Event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.shops?.forEach((shop) => {
      shops.push(shop);
    });
    event.features?.consumables?.forEach((consumable) => {
      consumables.push(consumable);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2022].forEach((event: Event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.shops?.forEach((shop) => {
      shops.push(shop);
    });
    event.features?.consumables?.forEach((consumable) => {
      consumables.push(consumable);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2021].forEach((event: Event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.shops?.forEach((shop) => {
      shops.push(shop);
    });
    event.features?.consumables?.forEach((consumable) => {
      consumables.push(consumable);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  events[2020].forEach((event: Event) => {
    event.features?.countries?.forEach((country) => {
      countries.push(country);
    });
    event.features?.cities?.forEach((city) => {
      cities.push(city);
    });
    event.features?.districts?.forEach((district) => {
      districts.push(district);
    });
    event.features?.attractions?.forEach((attraction) => {
      attractions.push(attraction);
    });
    event.features?.accommodation?.forEach((accommodationIteration) => {
      accommodation.push(accommodationIteration);
    });
    event.features?.supermarkets?.forEach((supermarket) => {
      supermarkets.push(supermarket);
    });
    event.features?.shops?.forEach((shop) => {
      shops.push(shop);
    });
    event.features?.consumables?.forEach((consumable) => {
      consumables.push(consumable);
    });
    event.features?.cafes?.forEach((cafe) => {
      cafes.push(cafe);
    });
    event.features?.bakeries?.forEach((bakery) => {
      bakeries.push(bakery);
    });
    event.features?.gelaterias?.forEach((gelateria) => {
      gelaterias.push(gelateria);
    });
    event.features?.restaurants?.forEach((restaurant) => {
      restaurants.push(restaurant);
    });
    event.features?.bars?.forEach((bar) => {
      bars.push(bar);
    });
    event.features?.nostalgiaEffect?.forEach((nostalgiaEffectIteration) => {
      nostalgiaEffect.push(nostalgiaEffectIteration);
    });
  });

  const compiledFeatures: Features = {
    countries: removeDuplicates(countries.sort()),
    cities: removeDuplicates(cities.sort()),
    districts: removeDuplicates(districts.sort()),
    attractions: removeDuplicates(attractions.sort()),
    accommodation: removeDuplicates(accommodation.sort()),
    supermarkets: removeDuplicates(supermarkets.sort()),
    shops: removeDuplicates(shops.sort()),
    consumables: removeDuplicates(consumables.sort()),
    cafes: removeDuplicates(cafes.sort()),
    bakeries: removeDuplicates(bakeries.sort()),
    gelaterias: removeDuplicates(gelaterias.sort()),
    restaurants: removeDuplicates(restaurants.sort()),
    bars: removeDuplicates(bars.sort()),
    nostalgiaEffect: removeDuplicates(nostalgiaEffect.sort()),
  };

  return compiledFeatures;
};
