import { styled, TextField } from "@mui/material";
import React from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#7FC9C9",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7FC9C9",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#7FC9C9",
      borderRadius: "50px",
    },
    "&:hover fieldset": {
      borderColor: "#7FC9C9",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7FC9C9",
    },
  },
});

export const InputText = ({
  label,
  type = "text",
  name,
  register,
  error,
  ...props
}) => {
  return (
    <CssTextField
      fullWidth
      variant="outlined"
      // size="small"
      label={label}
      type={type}
      {...register(name)}
      error={!!error}
      helperText={error?.message}
      {...props}
    />
  );
};
