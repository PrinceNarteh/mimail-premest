import { createContext } from "react";

interface IMail {
  sender: string;
  recipient: string;
  read: boolean;
  title: string;
  body: string;
}

interface IAuthContext {
  token: string | null;
  user: {
    username: string;
    sent: IMail[];
    inbox: IMail[];
  } | null;
  dispatch: React.Dispatch<any>;
}

const initialValue: IAuthContext = {
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
  return (
    <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
  );
};
