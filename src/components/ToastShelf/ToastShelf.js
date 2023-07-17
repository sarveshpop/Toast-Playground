import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, i) => {
        return (
          <li key={i} className={styles.toastWrapper}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              message={toast.message}
              showToast={toast.showToast}
              setShowToast={toast.setShowToast}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
