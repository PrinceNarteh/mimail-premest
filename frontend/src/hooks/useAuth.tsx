import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export const useAuth = () => {
  const { loading, error, user, token, dispatch } = useContext(AuthContext);
  return { loading, error, user, token, dispatch };
};
