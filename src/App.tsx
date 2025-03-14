import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-layout dark:bg-dark-layout">
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
