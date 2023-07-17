import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function popToast(message, variant) {
    setToasts((prevState) => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        message: message,
        variant: variant,
      },
    ]);
  }

  function dismissToast(id) {
    const newtToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(newtToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, popToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
