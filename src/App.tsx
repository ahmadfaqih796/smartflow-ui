import { AlertProvider } from "./context/AlertContext";
import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <div className="bg-layout transition duration-1000 ease-in-out dark:bg-dark-layout">
          <AppRoutes />
        </div>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
