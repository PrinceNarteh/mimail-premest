import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./auth.reducer";
import { MailType } from "../mail/mail.context";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export type StateType = {
  token: string | null;
  user: {
    username: string;
  } | null;
  sent: MailType[];
  inbox: MailType[];
};

const defaultState: StateType = {
  token: null,
  user: null,
  inbox: [],
  sent: [],
};

export const AuthContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({ state: defaultState, dispatch: () => null });

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { storedValue, setValue } = useLocalStorage(defaultState);
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