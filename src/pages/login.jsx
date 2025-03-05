import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { InputPassword, InputText } from "../components/common/input";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";
import { encryptPassword } from "../utils/generatePassword";

const schema = yup.object().shape({
  username: yup.string().required("Username wajib diisi"),
  password: yup
    .string()
    // .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

const Login = () => {
  const { login } = useAuth();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await login({
        username: data.username,
        password: encryptPassword(data.password),
      });
      showAlert("Login Berhasil", "success");
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Login gagal:", error);
      showAlert(error?.response?.data?.message, "error");

    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ p: 4, width: 400 }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Username"
            name="username"
            defaultValue="goklas"
            register={register}
            error={errors.username}
          />
          <InputPassword
            label="Password"
            type="password"
            name="password"
            defaultValue="23"
            register={register}
            error={errors.password}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
