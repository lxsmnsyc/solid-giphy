import { renderGif } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import { ParamType } from './utils';

export type GifProps = ParamType<typeof renderGif>;

export default function giphyGif<T extends HTMLElement>(
  el: T,
  options: () => GifProps,
): void {
  createEffect(() => renderGif(options(), el));
}
