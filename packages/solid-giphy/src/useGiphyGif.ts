import { createEffect } from 'solid-js';
import giphyGif, { GifProps } from './giphyGif';

export default function useGiphyGif<T extends HTMLElement>(
  el: () => T,
  options: GifProps,
): void {
  createEffect(() => {
    giphyGif(el(), options);
  });
}
