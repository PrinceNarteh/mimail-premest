import { StateType } from "../mainContext";
import { MailActionTypes } from "./mail.action";
import { MailType } from "./mail.context";

interface ActionType {
  type: string;
  payload: any;
}

const replaceMail = (arr: MailType[], action: ActionType) => {
  return arr.map((mail: MailType) => {
    if (mail._id === action.payload.mail._id) {
      return action.payload.mail;
    }
    return mail;
  });
};

const deleteMail = (arr: MailType[], action: ActionType) => {
  return arr.filter((mail: MailType) => mail._id !== action.payload.mail);
};

export const mailReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  let {
    mails: { inbox, sent },
  } = state;
  const routeName = action.payload.routeName.substring(1);

  switch (action.type) {
    case MailActionTypes.ADD_MAILS: {
      return {
        ...state,
        mails: { inbox: action.payload.inbox, sent: action.payload.sent },
      };
    }
    case MailActionTypes.ADD_MAIL: {
      const newInbox = [action.payload.mail, ...state.mails.inbox];
      return { ...state, mails: { inbox: newInbox, sent } };
    }
    case MailActionTypes.TOGGLE_STARRED: {
      if (routeName === "inbox") {
        inbox = replaceMail(inbox, action);
      } else if (routeName === "sent") {
        sent = replaceMail(sent, action);
      } else if (routeName === "starred") {
        const mail = inbox.find((mail) => mail._id === action.payload.mail._id);
        if (mail) {
          inbox = replaceMail(inbox, action);
        } else {
          sent = replaceMail(sent, action);
        }
      }
      return { ...state, mails: { inbox, sent } };
    }
    case MailActionTypes.DELETE_MAIL: {
      if (routeName === "inbox") {
        inbox = deleteMail(inbox, action);
      } else if (routeName === "sent") {
        sent = deleteMail(sent, action);
      } else if (routeName === "starred") {
        const mail = inbox.find((mail) => mail._id === action.payload.mail._id);
        if (mail) {
          inbox = deleteMail(inbox, action);
        } else {
          sent = deleteMail(sent, action);
        }
      }
      return { ...state, mails: { inbox, sent } };
    }
    default:
      return state;
  }
};
