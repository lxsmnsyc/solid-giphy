import { Grid, renderGrid } from '@giphy/js-components';
import { createEffect } from 'solid-js';

export default function giphyGrid<T extends HTMLElement>(
  el: T,
  options: () => Grid['props'],
): void {
  createEffect(() => renderGrid(options(), el));
}
