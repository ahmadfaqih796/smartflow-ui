import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { InputPassword, InputText } from "../components/common/input";
import { useAlert } from "../context/AlertContext";
import { useAuth } from "../context/AuthContext";
import { encryptPassword } from "../utils/generatePassword";
import { COLOR } from "../design/color";
import useResponsive from "../hooks/useResponsive";

const schema = yup.object().shape({
  username: yup.string().required("Username wajib diisi"),
  password: yup
    .string()
    // .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

const Login = () => {
  const { isMobile } = useResponsive();
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
        // alignItems: "center",
        width: "100vw",
        height: "100vh",
        p: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/elements/element-top.png"
          alt="Logo"
          style={{
            zIndex: -1,
            position: "absolute",
            width: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            p: 4,
            width: 400,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Typography variant="h6" fontWeight={600} color={COLOR.error}>
            Welcome Back
          </Typography>
          <Typography variant="caption" fontWeight={600} color={COLOR.gray}>
            Enter your username and password to sign in
          </Typography>
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                float: "right",
                backgroundColor: COLOR.primary,
                borderRadius: "20px",
                mt: 1,
                ":hover": {
                  backgroundColor: COLOR.error,
                },
              }}
            >
              Login
            </Button>
          </form>
        </Box>
        <img
          src="/elements/work.png"
          alt="Logo"
          style={{
            zIndex: -1,
            position: "absolute",
            width: "50%",
            height: "auto",
            left: 0,
            bottom: 0,
          }}
        />
      </Box>
      <Box sx={{ width: isMobile ? "0" : "50%" }}>
        <img
          src="/elements/login.png"
          alt="Logo"
          style={{
            width: "100%",
            height: "90vh",
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
