import { ANIMATION } from "@/constants/theme";
import { ModalManager } from "@/utils/modalManager";
import React from "react";

type UserModalProps = {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: React.ReactNode;
  fullwidth?: boolean;
};

const Modal: React.FC<UserModalProps> = ({
  open,
  onClose,
  title,
  children,
  fullwidth = false,
}) => {
  React.useEffect(() => {
    if (open) ModalManager.increment();
    return () => {
      if (open) ModalManager.decrement();
    };
  }, [open]);

  return (
    <div
      className={`
        fixed inset-0 z-9999 p-4 flex items-center justify-center bg-black/30 backdrop-blur-sm
        ${ANIMATION}
        ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg ${ANIMATION} ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${fullwidth ? "w-full" : "w-full max-w-md"}`}
      >
        <div className="relative flex items-center justify-between m-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </h2>
          {onClose && (
            <button onClick={onClose} className="text-2xl">
              &times;
            </button>
          )}
        </div>
        <hr />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
