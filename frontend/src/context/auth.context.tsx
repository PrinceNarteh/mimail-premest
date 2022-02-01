import { createContext, useEffect, useReducer } from "react";
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

export interface IState {
  state: {
    loading: boolean;
    error: object | null;
    token: string | null;
    user: {
      username: string;
      sent: IMail[];
      inbox: IMail[];
    } | null;
  };
  dispatch?: React.Dispatch<any>;
}

const initialState: IState = {
  state: {
    loading: false,
    error: null,
    token: null,
    user: null,
  },
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { storedValue, setValue } = useLocalStorage(initialState);
  const [state, dispatch] = useReducer(
    authReducer,
    storedValue,
    () => storedValue
  );

  useEffect(() => {
    setValue(state);
  }, [state, setValue]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
