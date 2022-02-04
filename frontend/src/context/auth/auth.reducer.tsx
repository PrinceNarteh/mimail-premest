import { StateType } from "../mainContext";
import { AuthActionTypes } from "./auth.action";

interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = (state: StateType, action: IAction): StateType => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        auth: {
          isLoggedIn: true,
          token: action.payload.token,
          user: action.payload.user,
        },
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        auth: { isLoggedIn: false, user: null, token: null },
        mails: { inbox: [], sent: [] },
      };
    }
    default:
      return state;
  }
};
