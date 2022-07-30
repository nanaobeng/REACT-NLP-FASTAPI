import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthAPI";
const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = isAuthenticated();
  return auth ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateWrapper;
