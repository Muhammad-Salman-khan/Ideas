import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
type Theme = "light" | "dark";
export const ThemeChangerContext = createContext<{
  Theme: string;
  switchTheme: () => void;
} | null>(null);
const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  const [Theme, setTheme] = useState(localStorage.getItem("Theme") || "light");
  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", Theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", Theme);
    }
  }, [Theme]);
  const switchTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeChangerContext.Provider value={{ Theme, switchTheme }}>
        {children}
      </ThemeChangerContext.Provider>
    </>
  );
};

export default ThemeContext;
export const useTheme = () => {
  return useContext(ThemeChangerContext);
};
