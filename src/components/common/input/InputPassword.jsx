import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export const InputPassword = ({
  label,
  type = "password",
  name,
  register,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <TextField
        fullWidth
        margin="normal"
        label={label}
        variant="outlined"
        type={showPassword ? "text" : "password"}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </div>
  );
};
