import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./auth.reducer";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { StateType } from "./auth.types";

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
