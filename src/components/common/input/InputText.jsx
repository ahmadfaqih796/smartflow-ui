import { TextField } from "@mui/material";
import React from "react";

export const InputText = ({ label, type = "text", name, register, error, ...props }) => {
  return (
    <div>
      <TextField
        fullWidth
        margin="normal"
        label={label}
        variant="outlined"
        type={type}
        {...register(name)}
        error={!!error}
        helperText={error?.message}
        {...props}
      />
    </div>
  );
};
