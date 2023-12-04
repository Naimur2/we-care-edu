import ModalContext from "modal/state/ModalContext";
import { setModal } from "modal/state/ModalReducer";
import React from "react";

export default function useModal() {
  const { state, dispatch } = React.useContext(ModalContext);

  const openModal = React.useCallback(
    (name, props) => {
      dispatch(setModal({ name, props }));
    },
    [dispatch]
  );

  const closeModal = React.useCallback(() => {
    dispatch(setModal(undefined));
  }, [dispatch]);

  const isOpen = React.useCallback(
    (name) => {
      return state?.modal?.name === name;
    },
    [state?.modal?.name]
  );

  return {
    openModal,
    closeModal,
    modal: state?.modal,
    isOpen,
  };
}
