import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./shared/styles/Fonts";
import Global from "./shared/styles/Global";
import Variables from "./shared/styles/Variables";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Fonts />
    <Global />
    <Variables />
    <App />
  </React.StrictMode>
);
