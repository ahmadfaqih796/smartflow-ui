import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const AuthGuard = ({ children, allowedRoles }: Props) => {
  const user = {
    role: "admin" as string,
    fullname: "Faqih" as string,
  };
  if (!user) {
    return <Navigate to="/login" />;
  }

  const isAuthorized = allowedRoles ? allowedRoles.includes(user.role) : true;

  if (!isAuthorized) {
    return <Navigate to="/403" />;
  }
  return children;
};

export default AuthGuard;
