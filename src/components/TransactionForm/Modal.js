import React, { useEffect } from "react";

// Styles \\
import styles from "./Modal.module.scss";

const Modal = ({ children, setShowModal }) => {
  // Close Modal On Escape Keypress \\
  useEffect(() => {
    const closeModal = (event) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [setShowModal]);

  // JSX \\
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={() => setShowModal(false)} />
      <div className={styles.container}>{children}</div>
    </React.Fragment>
  );
};

export default Modal;
