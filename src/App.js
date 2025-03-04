import "./App.css";
import { AlertProvider } from "./context/AlertContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./router/routes";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AppRouter />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
