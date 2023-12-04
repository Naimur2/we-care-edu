import close from "../icons/close.svg";
import styles from "./Modal.module.css";

export default function ModalHeader({
  className = "",
  icon,
  iconClassName = "",
  onClose,
  style,
  title,
  titleClassName = "",
}) {
  return (
    <div
      className={`${styles["modal-header"]} ${className}`}
      style={style}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <h1 className={`${styles["modal-heading"]} ${titleClassName}`}>
        {title}
      </h1>
      <div
        className={`${styles["modal-icon"]} ${iconClassName}`}
        onClick={onClose}
      >
        {icon ?? <img src={close} alt="close" />}
      </div>
    </div>
  );
}
