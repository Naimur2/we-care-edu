import React from "react";
import styles from "./Modal.module.css";



export default function ModalConent({
  children,
  className = "",
  style,
}) {
  return (
    <div
      style={style}
      className={`${styles["modal-content"]} ${className}`}
      onPointerDown={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}
