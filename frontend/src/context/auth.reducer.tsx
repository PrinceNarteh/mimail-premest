import { AuthActionTypes } from "./auth.action";
import { MailType, StateType } from "./auth.types";

interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = (state: StateType, action: IAction): StateType => {
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
        const inbox: any = user?.inbox.map((mail: MailType) => {
          if (mail._id === action.payload.mail._id) {
            return action.payload.mail;
          }
          return mail;
        });
        if (user) {
          user.inbox = inbox;
        }
      } else if (routeName === "sent") {
        const sent: any = user?.sent.map((mail) => {
          if (mail._id === action.payload.mail._id) {
            return action.payload.mail;
          }
          return mail;
        });
        if (user) {
          user.sent = sent;
        }
      }
      return { ...state, user };
    }
    case AuthActionTypes.LOGOUT: {
      return { loading: false, error: null, user: null, token: null };
    }
    default:
      return state;
  }
};
