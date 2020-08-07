import { useEffect, useState } from "react";

export const useTheme = () => {
  const storage = window.localStorage;
  const initTheme = storage.getItem("theme") || "light";

  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    theme === "light"
      ? storage.setItem("theme", "light")
      : storage.setItem("theme", "dark");
  }, [storage, theme]);

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return [theme, toggleTheme];
};

export default useTheme;
