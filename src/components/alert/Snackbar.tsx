type Props = {
  message: string;
  severity: string;
  onClose?: () => void;
};

export const Snackbar = ({ message, severity, onClose }: Props) => {
  return (
    <div className={`snackbar snackbar-${severity}`}>
      {message}

      {onClose && (
        <button onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};
