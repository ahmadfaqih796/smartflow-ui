import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/InputField";
import { useAlert } from "@/context/AlertContext";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { encryptPassword } from "@/utils/generatePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { MoonStar, Sun } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username wajib diisi"),
  password: yup
    .string()
    // .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

const LoginPage = () => {
  const { theme, toggleTheme } = useTheme();
  const { showAlert } = useAlert();
  const { login } = useAuth();
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await login({
        username: data.username,
        password: encryptPassword(data.password),
      });
      showAlert("Login Berhasil", "success");
      navigate("/home");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showAlert((error as any)?.response?.data?.message || "Login Gagal", "error");
      console.error("Login gagal:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="card w-[90%] sm:w-[400px] px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-header typography">
            <h1 className="text-center mb-7">Login</h1>
            <InputField
              label="Username"
              name="username"
              register={register("username")}
              error={errors.username}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              register={register("password")}
              error={errors.password}
            />
            <Button
              disabled={loading}
              fullwidth
              color="success"
              type="submit"
            >
              Masuk
            </Button>
          </div>
        </form>
        <div className="card-body">
          {/* {theme} */}
          <button onClick={toggleTheme}>
            {theme === "light" ? <MoonStar /> : <Sun />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
