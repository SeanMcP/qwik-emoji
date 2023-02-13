import { Emoji } from "./components/emoji/emoji";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Emoji symbol="👋" label="Waving hand" />
      </body>
    </>
  );
};
