import { MailType } from "../mail/mail.context";
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
    case AuthActionTypes.TOGGLE_STARRED: {
      let {
        mails: { inbox, sent },
      } = state;
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
      return { ...state, mails: { inbox, sent } };
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
