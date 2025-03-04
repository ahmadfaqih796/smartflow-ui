import "./App.css";
import { AlertProvider } from "./context/AlertContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRouter from "./router/routes";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
