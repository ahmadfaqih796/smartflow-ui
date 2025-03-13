import { ThemeProvider } from "./context/ThemeContext";
import AppRoutes from "./routes";

function App() {

  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
