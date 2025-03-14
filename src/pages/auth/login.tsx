import { useTheme } from "@/context/ThemeContext";

const LoginPage = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="card w-[90%] sm:w-[400px]">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div className="card-header typography">
          <h1 className="text-center">Login</h1>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
