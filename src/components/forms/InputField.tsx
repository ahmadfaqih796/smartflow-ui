import { Eye, EyeOff } from "lucide-react";
import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  name?: string;
  register?: any;
  error?: any;
  version?: "v1" | "v2";
};

export const InputField = ({
  label,
  type = "text",
  version = "v1",
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  if (version === "v1") {
    return (
      <div className="mb-5">
        <div className="form-group-v2">
          <input
            {...props?.register}
            className={`form-input ${type === "password" ? "pr-10" : ""}`}
            id={props.name}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            placeholder={props.placeholder ? props.placeholder : ""}
            {...props}
          />
          {label && (
            <label htmlFor={props.name} className="form-label">
              {label}
            </label>
          )}
          {type === "password" && (
            <button
              type="button"
              className="eye-toggle"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
          {props.error && (
            <span className="form-text-error">{props.error?.message}</span>
          )}
      </div>
    );
  } else {
    return (
      <div className="form-group relative">
        {label && <label htmlFor={props.name}>{label}</label>}
        <div className="relative">
          <input
            {...props?.register}
            id={props.name}
            className={`form-input ${type === "password" ? "pr-10" : " "}`}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            {...props}
          />
          {type === "password" && (
            <button
              type="button"
              className="eye-toggle"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
          {props.error && (
            <p className="text-red-500">{props.error?.message}</p>
          )}
        </div>
      </div>
    );
  }
};
