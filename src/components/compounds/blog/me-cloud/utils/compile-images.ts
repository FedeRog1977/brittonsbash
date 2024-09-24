import { getSessionItem, removeDuplicates } from '../../../../../utils/index.js';
import { Img } from '../../../../bash-blocks/index.js';
import { Event } from '../../instant-gram/types/event.js';

export const compileImages = () => {
  const events = getSessionItem('response-events');
  const images: Img[] = [];

  events[2024].forEach((event: Event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2023].forEach((event: Event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2022].forEach((event: Event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2021].forEach((event: Event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  events[2020].forEach((event: Event) => {
    event.images.forEach((image) => {
      images.push(image);
    });
  });

  console.log(images);

  return images;
};
