import { Grid } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import giphyGrid from './giphyGrid';

export default function useGiphyGrid<T extends HTMLElement>(
  el: () => T,
  options: Grid['props'],
): void {
  createEffect(() => {
    giphyGrid(el(), options);
  });
}
