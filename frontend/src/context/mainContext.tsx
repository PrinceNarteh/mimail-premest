import React, { createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authReducer } from "./auth/auth.reducer";
import { MailType } from "./mail/mail.context";
import { mailReducer } from "./mail/mail.reducer";

export type StateType = {
  auth: {
    isLoggedIn: boolean;
    token: string | null;
    user: {
      username: string;
    } | null;
  };
  mails: {
    sent: MailType[];
    inbox: MailType[];
  };
};

export type ActionType = {
  type: string;
  payload: any;
};

const initialState: StateType = {
  auth: {
    token: null,
    user: null,
    isLoggedIn: false,
  },
  mails: {
    inbox: [],
    sent: [],
  },
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ auth, mails }, action) => ({
  auth: authReducer(auth, action),
  mails: mailReducer(mails, action),
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { storedValue, setValue } = useLocalStorage(initialState);
  const [state, dispatch] = useReducer(
    mainReducer,
    storedValue,
    () => storedValue
  );

  useEffect(() => {
    setValue(state);
  }, [state, setValue]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
