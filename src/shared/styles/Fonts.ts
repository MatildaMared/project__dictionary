import { createGlobalStyle } from "styled-components";
import Inter from "./../../assets/fonts/inter/Inter-Variable.ttf";
import Inconsolata from "./../../assets/fonts/inconsolata/Inconsolata-Variable.ttf";
import Lora from "./../../assets/fonts/lora/Lora-Variable.ttf";
import LoraItalic from "./../../assets/fonts/lora/Lora-Italic-Variable.ttf";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: "Inconsolata";
    src: url(${Inconsolata}) format("truetype");
    font-style: auto;
    font-weight: 100 1000;
  }

  @font-face {
    font-family: "Inter";
    src: url(${Inter}) format("truetype");
    font-style: auto;
    font-weight: 100 1000;
  }

  @font-face {
    font-family: "Lora";
    src: url(${Lora}) format("truetype");
    font-style: normal;
    font-weight: 100 1000;
  }

  @font-face {
    font-family: "Lora";
    src: url(${LoraItalic}) format("truetype");
    font-style: italic;
    font-weight: 100 1000;
  }
`;

export default Fonts;
