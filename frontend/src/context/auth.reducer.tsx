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
    case AuthActionTypes.STARRED_INBOX_MAIL: {
      const user = state.user;
      const routeName = action.payload.routeName.substring(1);

      if (routeName === "inbox") {
        user?.inbox.map((mail) => {
          if (mail._id === action.payload.mail.mail._id) {
            console.log("found");
            return action.payload.mail;
          }
          console.log("Not Found");
          return mail;
        });
      } else if (routeName === "sent") {
        user?.sent.map((mail) => {
          if (mail._id === action.payload.mail.mail._id) {
            console.log("found");
            return action.payload.mail;
          }
          console.log(action.payload);
          return mail;
        });
      }
      console.log(user);
      return { ...state, user };
    }
    case AuthActionTypes.LOGOUT:
      return { loading: false, error: null, user: null, token: null };
    default:
      return state;
  }
};
