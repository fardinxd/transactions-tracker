import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem("dark-mode");
    return item ? JSON.parse(item) : false;
  });

  useEffect(() => {
    if (storedValue) {
      window.document.body.classList.add("dark-mode");
      window.document.body.classList.remove("light-mode");
    } else {
      window.document.body.classList.add("light-mode");
      window.document.body.classList.remove("dark-mode");
    }

    window.localStorage.setItem("dark-mode", JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

export default useDarkMode;
