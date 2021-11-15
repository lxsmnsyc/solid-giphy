import { renderVideo } from '@giphy/js-components';
import { createEffect } from 'solid-js';
import { VideoProps } from './giphyVideo';

export default function useGiphyVideo<T extends HTMLElement>(
  el: () => T,
  options: VideoProps,
): void {
  createEffect(() => renderVideo(options, el()));
}
