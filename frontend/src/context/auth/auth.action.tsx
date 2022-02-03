import { MailType } from "../mail/mail.context";

export const AuthActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  TOGGLE_STARRED: "TOGGLE_STARRED",
};

export const AuthAction = {
  login: (username: string, password: string) => ({
    type: AuthActionTypes.LOGIN,
    payload: { username, password },
  }),
  logout: () => ({ type: AuthActionTypes.LOGOUT }),
  toggleStarred: (mail: MailType, routeName: string) => ({
    type: AuthActionTypes.TOGGLE_STARRED,
    payload: { mail, routeName },
  }),
};
