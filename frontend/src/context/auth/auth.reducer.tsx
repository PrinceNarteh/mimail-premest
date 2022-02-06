import { AuthActionTypes } from "./auth.action";

type IAction = {
  type: string;
  payload: AuthStateType;
};

export type AuthStateType = {
  isLoggedIn: boolean;
  token: string | null;
  user: {
    _id: string;
    username: string;
  } | null;
};

export const authReducer = (
  state: AuthStateType,
  action: IAction
): AuthStateType => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        isLoggedIn: false,
        user: null,
        token: null,
      };
    }
    default:
      return state;
  }
};
