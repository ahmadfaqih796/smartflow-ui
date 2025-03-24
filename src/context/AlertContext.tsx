import { Snackbar } from "@/components/alert/Snackbar";
import React from "react";

export const AlertContext = React.createContext({
  alert: {
    open: false,
    severity: "success",
    message: "",
  },
  showAlert: (_message = "", _severity = "success") => {},
});

export const AlertProvider = ({ children }: any) => {
  const [alert, setAlert] = React.useState({
    open: false,
    severity: "success",
    message: "",
  });

  const showAlert = (message = "", severity = "success") => {
    setAlert({
      open: true,
      severity,
      message,
    });
  };

  const handleClose = () => {
    setAlert({
      open: false,
      severity: "success",
      message: "",
    });
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
      <Snackbar message={alert.message} severity={alert.severity} onClose={handleClose} />
    </AlertContext.Provider>
  );
};

export const useAlert = () => React.useContext(AlertContext);
