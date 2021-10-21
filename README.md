# solid-giphy

> SolidJS bindings for [giphy](https://developers.giphy.com/docs/sdk#web)

[![NPM](https://img.shields.io/npm/v/solid-giphy.svg)](https://www.npmjs.com/package/solid-giphy) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/LXSMNSYC/solid-giphy/tree/main/examples/simple-example)

## Install

```bash
yarn add solid-giphy
```

## Usage

```jsx
import { createGiphyGrid, giphyGrid } from 'solid-giphy';

const gf = new GiphyFetch('your Web SDK key')

// With directives
function App() {
  return (
    <div
      use:giphyGrid={{
        fetchGifs(offset: number) {
          return gf.trending({ offset, limit: 25 });
        },
        width: GRID_WIDTH,
        column: 3,
        gutter: 6,
      }}
    />
  );
}

// With utility
function App() {
  const [ref, setRef] = createSignal();

  createGiphyGrid(ref, {
    fetchGifs(offset: number) {
      return gf.trending({ offset, limit: 25 });
    },
    width: GRID_WIDTH,
    column: 3,
    gutter: 6,
  });

  return <div ref={setRef} />;
}
```

Read more on [`@giphy/js-components`](https://github.com/Giphy/giphy-js/tree/master/packages/components). APIs are based from `@giphy/js-components` with minor changes.

### Utilities

- `useGiphyGrid`/`createGiphyGrid`
- `useGiphyCarousel`/`createGiphyCarousel`
- `useGiphyGif`/`createGiphyGif`
- `useGiphyVideo`/`createGiphyVideo`

### Directives

- `giphyGrid`
- `giphyCarousel`
- `giphyGif`
- `giphyVideo`

## License

MIT © [lxsmnsyc](https://github.com/lxsmnsyc)
