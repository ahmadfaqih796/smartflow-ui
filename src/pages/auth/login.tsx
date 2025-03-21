import { InputField } from "@/components/forms/InputField";
import { useTheme } from "@/context/ThemeContext";
import AuthService from "@/lib/services/AuthService";
import { encryptPassword } from "@/utils/generatePassword";

const service = new AuthService();

const LoginPage = () => {
  const { toggleTheme } = useTheme();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = encryptPassword(event.currentTarget.password.value);
    try {
      const response = service.login({ username, password });
      console.log("response", response)
    } catch (error) {
      console.log("eeeee", error)
    }
    console.log("Form submitted!", username, password);
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="card w-[90%] sm:w-[400px]">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <form onSubmit={handleSubmit}>
          <div className="card-header typography">
            <h1 className="text-center">Login</h1>
            <InputField label="Username" name="username" />
            <InputField label="Password" name="password" type="password" />
          </div>
          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
