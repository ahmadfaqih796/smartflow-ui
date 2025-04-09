import React from "react";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
  variant?: "success" | "danger" | "warning" | "info";
  fullwidth?: boolean;
  onClick?: () => void;
};

export const Button = ({ children, ...props }: Props) => {
  const getVariant = (value?: string) => {
    switch (value) {
      case "success":
        return "bg-green-400 dark:bg-green-800";
      case "danger":
        return "bg-red-400 dark:bg-red-800";
      case "warning":
        return "bg-yellow-400 dark:bg-yellow-800";
      case "info":
        return "bg-blue-400 dark:bg-blue-800";
      default:
        return "bg-primary dark:bg-primary";
    }
  };

  return (
    <button
      {...props}
      className={`${
        props.disabled ? "bg-gray-400 cursor-not-allowed" : `${getVariant(props.variant)} cursor-pointer`
      } ${
        props.fullwidth ? "w-full" : ""
      }  text-white font-bold py-2 px-4 rounded transition duration-1000 ease-in-out`}
    >
      {children}
    </button>
  );
};
