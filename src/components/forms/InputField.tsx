import React from "react";

type Props = {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number";
  name?: string;
  version?: "v1" | "v2";
};

export const InputField = ({
  label,
  type = "text",
  version = "v1",
  ...props
}: Props) => {
  if (version === "v1") {
    return (
      <div className="form-group-v2">
        <input
          className="form-input"
          id={props.name}
          type={type}
          placeholder={props.placeholder ? props.placeholder : ""}
          {...props}
        />
        {label && (
          <label htmlFor={props.name} className="form-label">
            {label}
          </label>
        )}
      </div>
    );
  } else if (version === "v2") {
    return (
      <div className="form-group">
        {label && <label htmlFor={props.name}>{label}</label>}
        <input id={props.name} type={type} {...props} />
      </div>
    );
  } else {
    return (
      <>
        <div className="form-group">
          {label && <label htmlFor={props.name}>{label}</label>}
          <input id={props.name} type={type} {...props} />
        </div>
      </>
    );
  }
};
