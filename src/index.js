import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import "./index.css";
import ModalWrapper from "./modal/components/ModalWrapper";
import { store } from "store/store";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <ModalWrapper>
        <App />
      </ModalWrapper>
    </Provider>
  </>
);
