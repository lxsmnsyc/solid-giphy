import { renderGif } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import { GifProps } from './giphyGif';

export default function useGiphyGif<T extends HTMLElement>(
  el: () => T,
  options: GifProps,
): void {
  createEffect(() => renderGif(options, el()));
}
