import React from "react";

type Theme = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<Theme>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: darkMode ? "dark" : "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext<Theme>(ThemeContext);
