import { Loader } from "lucide-react";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
  color?: "success" | "danger" | "warning" | "info";
  variant?: "contained" | "rounded";
  fullwidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

type ButtonIconProps = ButtonProps & {
  tooltip?: string;
  position?: "top" | "bottom" | "left" | "right";
};

const getColor = (value?: string) => {
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

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${
        props.disabled
          ? "bg-gray-400 cursor-not-allowed"
          : `${getColor(props.color)} cursor-pointer`
      } ${props.fullwidth ? "w-full" : ""} ${
        props.variant === "rounded"
          ? "rounded-full py-2 px-2"
          : "rounded py-2 px-4"
      } text-white font-bold rounded transition duration-1000 ease-in-out`}
    >
      {children}
    </button>
  );
};

export const ButtonIcon = ({
  children,
  tooltip,
  position = "top",
  loading = false,
  ...props
}: ButtonIconProps) => {
  const [show, setShow] = React.useState(false);
  const getPositionTooltip = (value?: string) => {
    switch (value) {
      case "top":
        return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
      case "right":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      case "bottom":
        return "top-full mt-2 left-1/2 transform -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 transform -translate-y-1/2";
      default:
        return "top-full mt-2 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div className="relative inline-block">
      <button
        {...props}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={`${
          props.disabled || loading
            ? "bg-gray-400 cursor-not-allowed"
            : `${getColor(props.color)} cursor-pointer`
        } rounded-full py-2 px-2 text-white font-bold transition duration-400 ease-in-out`}
      >
        {loading ? <Loader className="animate-spin" /> : children}
      </button>
      {tooltip && show && (
        <div
          className={`${getPositionTooltip(
            position
          )} absolute rounded bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 text-xs py-1 px-2 z-99999 whitespace-nowrap`}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};
