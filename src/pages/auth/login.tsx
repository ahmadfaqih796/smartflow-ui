import { InputField } from "@/components/forms/InputField";
import { useAlert } from "@/context/AlertContext";
import { useTheme } from "@/context/ThemeContext";
import AuthService from "@/lib/services/AuthService";
import { encryptPassword } from "@/utils/generatePassword";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const service = new AuthService();

const schema = yup.object().shape({
  username: yup.string().required("Username wajib diisi"),
  password: yup
    .string()
    // .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

const LoginPage = () => {
  const { toggleTheme } = useTheme();
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Errors:", errors);

  const onSubmit = async (data: any) => {
    console.log("msssss", data);
    try {
      const response = await service.login({
        username: data.username,
        password: encryptPassword(data.password),
      });
      showAlert("Login Berhasil", "success");
    } catch (error) {
      showAlert("Login Gagal", "error");
      console.error("Login gagal:", error);
    }
  };

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="card w-[90%] sm:w-[400px]">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-header typography">
            <h1 className="text-center">Login</h1>
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
          </div>
          <button type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
