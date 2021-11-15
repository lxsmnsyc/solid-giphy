import { renderVideo } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import { ParamType } from './utils';

export type VideoProps = ParamType<typeof renderVideo>;

export default function giphyVideo<T extends HTMLElement>(
  el: T,
  options: () => VideoProps,
): void {
  createEffect(() => renderVideo(options(), el));
}
