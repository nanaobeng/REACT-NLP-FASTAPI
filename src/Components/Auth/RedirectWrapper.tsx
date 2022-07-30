import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./AuthAPI";
const RedirectWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = isAuthenticated();

  return !auth ? children : <Navigate to="/" replace />;
};

export default RedirectWrapper;
