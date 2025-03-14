import { useTheme } from "@/context/ThemeContext";
import React from "react";

const LoginPage = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="card">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="card-header typography">
        <h1>login</h1>
      </div>
    </div>
  );
};

export default LoginPage;
