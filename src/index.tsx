import { createRoot } from "react-dom/client";
import React from "react";
import "./styles/globals.scss";
import "./styles/index.scss";
import App from "./app/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

const store = setupStore();
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);
