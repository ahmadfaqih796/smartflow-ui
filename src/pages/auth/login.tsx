import { useTheme } from "@/context/ThemeContext";
import React from "react";

const LoginPage = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="card dark:bg-dark-primary">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="typography">
        <h1 className="text-primary dark:text-secondary">login</h1>
      </div>
    </div>
  );
};

export default LoginPage;
