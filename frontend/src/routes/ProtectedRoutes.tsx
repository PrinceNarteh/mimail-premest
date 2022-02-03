import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export const ProtectedRoutes = () => {
  const {
    state: { auth },
  } = useAppContext();
  const location = useLocation();

  return auth.isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} />
  );
};
