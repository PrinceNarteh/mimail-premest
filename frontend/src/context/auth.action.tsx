import { IMail } from "./auth.context";

export const AuthActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  STARRED_INBOX_MAIL: "STARRED_MAIL",
};

export const AuthAction = {
  login: (username: string, password: string) => ({
    type: AuthActionTypes.LOGIN,
    payload: { username, password },
  }),
  logout: () => ({ type: AuthActionTypes.LOGOUT }),
  toggleStarred: (mail: IMail, routeName: string) => ({
    type: AuthActionTypes.STARRED_INBOX_MAIL,
    payload: { mail, routeName },
  }),
};
