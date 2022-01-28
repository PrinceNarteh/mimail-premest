import { AuthActionTypes } from "./auth.action";
import { IAuthContext } from "./auth.context";

type IState = Omit<IAuthContext, "dispatch">;

interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, loading: true };
    case AuthActionTypes.LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case AuthActionTypes.LOGOUT:
      return { loading: false, error: null, user: null, token: null };
    default:
      return state;
  }
};
