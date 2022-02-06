import { AuthStateType } from "./auth.reducer";

export const AuthActionTypes = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const AuthAction = {
  login: (payload: AuthStateType) => ({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload,
  }),
  logout: () => ({ type: AuthActionTypes.LOGOUT }),
};
