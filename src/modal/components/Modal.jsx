import { useEffect, useRef } from "react";
import Portal from "./Portal";
import styles from "./Modal.module.css";
import ModalConent from "./ModalConent";
import ModalHeader from "./ModalHeader";

export default function Modal({
  onClose,
  isOpen,
  children,
  className = "",
  style = {},
}) {
  const backdropRef = useRef(null);

  const handleClose = (e) => {
    e.stopPropagation();
    onClose?.();
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      handleClose(e);
    }
  };

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (backdrop) {
      //  stop scrollng without moving the screen to the top
      if (isOpen) {
        backdrop.style.display = "flex";
        backdrop.scrollTop = window.scrollY;
      } else {
        backdrop.style.display = "none";
        window.scrollTo(0, backdrop.scrollTop);
      }
    }
  }, [isOpen]);

  return (
    <Portal containerId="modal">
      {isOpen && (
        <>
          <div
            style={style}
            className={`${styles["modal-backdrop"]}  ${className}`}
            onClick={handleClose}
            onPointerDown={(e) => e.stopPropagation()}
            onKeyDown={handleEscape}
            ref={backdropRef}
          ></div>
          {children}
        </>
      )}
    </Portal>
  );
}

Modal.Content = ModalConent;
Modal.Header = ModalHeader;
