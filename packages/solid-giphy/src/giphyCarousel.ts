import { Carousel, renderCarousel } from '@giphy/js-components';
import { createEffect } from 'solid-js';

export default function giphyCarousel<T extends HTMLElement>(
  el: T,
  options: () => Carousel['props'],
): void {
  createEffect(() => renderCarousel(options(), el));
}
