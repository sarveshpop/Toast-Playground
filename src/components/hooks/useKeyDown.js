import React from "react";

const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === key) {
        callback(e);
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
};

export default useKeyDown;
