import { useContext } from "react";

import ModalContext from "modal/state/ModalContext";
import ModalProvider from "modal/state/ModalProvider";
import modals from "modal";



const RenderModal = () => {
  const { state } = useContext(ModalContext);
  const Component = modals[state?.modal?.name];

  return Component ? <Component {...state?.modal?.props} /> : null;
};

const ModalWrapper = ({ children }) => {
  return (
    <ModalProvider>
      {children}
      <RenderModal />
    </ModalProvider>
  );
};

export default ModalWrapper;
