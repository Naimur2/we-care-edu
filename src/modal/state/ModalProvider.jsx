import React from "react";
import { CLEAR_MODAL, SET_MODAL } from "./ModalReducer";
import ModalContext from "./ModalContext";

const initialState = {
  modal: undefined,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case CLEAR_MODAL:
      return {
        ...state,
        modal: undefined,
      };
    default:
      return state;
  }
};

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
