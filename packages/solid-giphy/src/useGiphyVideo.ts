import { createEffect } from 'solid-js';
import giphyVideo, { VideoProps } from './giphyVideo';

export default function useGiphyVideo<T extends HTMLElement>(
  el: () => T,
  options: VideoProps,
): void {
  createEffect(() => {
    giphyVideo(el(), options);
  });
}
