import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";

export default function AuthRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
