import { AuthActionTypes } from "./auth.action";
import { MailType, StateType } from "./auth.types";

interface IAction {
  type: string;
  payload?: any;
}

export const authReducer = (state: StateType, action: IAction): StateType => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case AuthActionTypes.TOGGLE_STARRED: {
      let { inbox, sent } = state;
      const routeName = action.payload.routeName.substring(1);

      if (routeName === "inbox") {
        const newInbox: any = inbox.map((mail: MailType) => {
          if (mail._id === action.payload.mail._id) {
            return action.payload.mail;
          }
          return mail;
        });

        inbox = newInbox;
      } else if (routeName === "sent") {
        const newSent: any = sent.map((mail) => {
          if (mail._id === action.payload.mail._id) {
            return action.payload.mail;
          }
          return mail;
        });
        sent = newSent;
      }
      return { ...state, inbox, sent };
    }
    case AuthActionTypes.LOGOUT: {
      return { user: null, token: null, inbox: [], sent: [] };
    }
    default:
      return state;
  }
};
