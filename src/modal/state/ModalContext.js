import { createContext } from "react";

const ModalContext = createContext({
  state: {},
  dispatch: () => {},
});

export default ModalContext;
