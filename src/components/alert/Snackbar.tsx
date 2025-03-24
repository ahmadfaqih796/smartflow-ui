type Props = {
  open: boolean;
  message: string;
  severity: string;
  onClose?: () => void;
};

export const Snackbar = ({ open = false, message, severity = "success", onClose }: Props) => {

  return (
    <div className={`snackbar snackbar-${severity} ${open ? "block" : "hidden"}`}>
      {message}
      {onClose && (
        <button className="bg-secondary" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};
