import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import React, { useState } from "react";

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7FC9C9',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7FC9C9',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7FC9C9',
      borderRadius: '50px',
    },
    '&:hover fieldset': {
      borderColor: '#7FC9C9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7FC9C9',
    },
  },
});

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
      <CssTextField
        fullWidth
        margin="normal"
        label={label}
        variant="outlined"
        // size="small"
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
