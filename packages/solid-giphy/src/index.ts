import { Carousel, Grid } from '@giphy/js-components';
import { GifProps } from './giphyGif';
import { VideoProps } from './giphyVideo';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      giphyCarousel: Carousel['props'];
      giphyGif: GifProps;
      giphyGrid: Grid['props'];
      giphyVideo: VideoProps;
    }
  }
}

export {
  default as giphyGrid,
} from './giphyGrid';
export {
  default as giphyCarousel,
} from './giphyCarousel';
export {
  default as giphyGif,
  GifProps,
} from './giphyGif';
export {
  default as giphyVideo,
  VideoProps,
} from './giphyVideo';
export {
  default as useGiphyGrid,
  default as createGiphyGrid,
} from './useGiphyGrid';
export {
  default as useGiphyCarousel,
  default as createGiphyCarousel,
} from './useGiphyCarousel';
export {
  default as useGiphyVideo,
  default as createGiphyVideo,
} from './useGiphyVideo';
export {
  default as useGiphyGif,
  default as createGiphyGif,
} from './useGiphyGif';
