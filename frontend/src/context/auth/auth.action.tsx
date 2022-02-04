export const AuthActionTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const AuthAction = {
  login: (username: string, password: string) => ({
    type: AuthActionTypes.LOGIN,
    payload: { username, password },
  }),
  logout: () => ({ type: AuthActionTypes.LOGOUT }),
};
