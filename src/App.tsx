import { AlertProvider } from "./context/AlertContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <AuthProvider>
          <div className="bg-layout transition duration-1000 ease-in-out dark:bg-dark-layout">
            <AppRoutes />
          </div>
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
