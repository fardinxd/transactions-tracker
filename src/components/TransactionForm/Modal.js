import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// Styles \\
import styles from "./Modal.module.scss";

const Modal = ({ children, setShow }) => {
  // Close Modal On Escape Keypress \\
  useEffect(() => {
    const closeModal = (event) => {
      if (event.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", closeModal);
    return () => window.removeEventListener("keydown", closeModal);
  }, [setShow]);

  // JSX \\
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.backdrop} onClick={() => setShow(false)} />
          <div className={styles.container}>{children}</div>
        </React.Fragment>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
