# qwik-emoji

[![npm](https://img.shields.io/npm/v/qwik-emoji.svg)](https://npmjs.com/package/qwik-emoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/qwik-emoji.svg)](https://npmjs.com/package/qwik-emoji) [![npm](https://img.shields.io/npm/dt/qwik-emoji.svg)](https://npmjs.com/package/qwik-emoji)

⚡️ An accessible Emoji component for Qwik applications

## Why?

Emojis can add a light playfulness to your project but require some specific formatting in order to ensure they are accessible for all users. `qwik-emoji`'s reusable `Emoji` component helps you do that quickly and painlessly.

## Installation

Add `qwik-emoji` to your project:

```sh
npm install qwik-emoji
# or
yarn add qwik-emoji
```

## Use

Import `Emoji`, a default export, from `qwik-emoji` and add it to your code:

```jsx
import Emoji from "qwik-emoji";

export default component$(() => {
  return (
    <div>
      <Emoji symbol="👋" label="Hello" />
      Qwik
      <Emoji symbol="⚡️" />
    </div>
  );
});
```

## Emoji component

The `Emoji` component consumes two props: `symbol` and `label`. Every other prop is spread to the top-level `<span>` element.

## License

[MIT](/LICENSE)
