import { Img } from '../../../../components';
import { Event } from '../../instant-gram/types/event';
import { brittonsBashContentFacade } from '../../../../implementations';

const events = await brittonsBashContentFacade.getEvents();

export const compileImages = () => {
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
