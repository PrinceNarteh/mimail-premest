import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuth = () => {
  const { user, token, dispatch } = useContext(AuthContext);
  return { user, token, dispatch };
};
