import { useContext } from "react";
import { AuthContext } from "../context/auth/auth.context";

export const useAuth = () => {
  return useContext(AuthContext);
};
