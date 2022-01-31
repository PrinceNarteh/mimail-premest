import { createContext, useReducer } from "react";
import { authReducer } from "./auth.reducer";
import { useLocalStorage } from "./../hooks/useLocalStorage";

export interface IMail {
  _id: string;
  sender: string;
  recipient: string;
  read: boolean;
  title: string;
  body: string;
  starred: boolean;
}

export interface IAuthContext {
  loading: boolean;
  error: object | null;
  token: string | null;
  user: {
    username: string;
    sent: IMail[];
    inbox: IMail[];
  } | null;
  dispatch: React.Dispatch<any>;
}

const initialValue: IAuthContext = {
  loading: false,
  error: null,
  token: null,
  user: null,
  dispatch: () => {},
};

export const AuthContext = createContext(initialValue);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { storedValue } = useLocalStorage(initialValue);
  const [{ loading, error, token, user }, dispatch] = useReducer(
    authReducer,
    storedValue,
    () => storedValue
  );

  return (
    <AuthContext.Provider value={{ loading, error, token, user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
