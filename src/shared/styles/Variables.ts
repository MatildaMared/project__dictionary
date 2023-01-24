import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {
    --font-sans-serif: "Inter", sans-serif;
    --font-serif: "Lora", serif;
    --font-monospace: "Inconsolata", monospace;

    --color-black: hsl(0, 0%, 5%);
    --color-white: hsl(0, 0%, 95%);
    --color-gray-300: hsl(0, 0%, 90%);
    --color-gray-400: hsl(0, 0%, 85%);
    --color-gray-500: hsl(0, 0%, 51%);
    --color-gray-600: hsl(0, 0%, 23%);
    --color-gray-700: hsl(0, 0%, 18%);
    --color-gray-800: hsl(0, 0%, 12%);

    --color-primary: hsl(274, 82%, 60%);
    --color-error: hsl(0, 100%, 66%);

    --spacing-xs: 0.5rem;
    --spacing-s: 1rem;
    --spacing-m: 2rem;
    --spacing-l: 4rem;
    --spacing-xl: 8rem;
  }
`;

export default Variables;
