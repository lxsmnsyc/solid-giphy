import { Carousel } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import giphyCarousel from './giphyCarousel';

export default function useGiphyCarousel<T extends HTMLElement>(
  el: () => T,
  options: Carousel['props'],
): void {
  createEffect(() => {
    giphyCarousel(el(), options);
  });
}
