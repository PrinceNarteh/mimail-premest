import { MailActionTypes } from "./mail.action";

export type MailType = {
  _id: string;
  sender: string;
  recipient: string;
  read: boolean;
  subject: string;
  message: string;
  starred: boolean;
};

type ActionType = {
  type: string;
  payload: any;
};

export type MailStateType = {
  inbox: MailType[];
  sent: MailType[];
};

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
  state: MailStateType,
  action: ActionType
): MailStateType => {
  let { inbox, sent } = state;

  switch (action.type) {
    case MailActionTypes.ADD_MAILS: {
      return {
        inbox: action.payload.inbox,
        sent: action.payload.sent,
      };
    }
    case MailActionTypes.ADD_MAIL: {
      console.log(action.payload);
      const newSent = [action.payload, ...state.sent];
      return { ...state, sent: newSent };
    }
    case MailActionTypes.TOGGLE_STARRED: {
      const routeName = action.payload.routeName.substring(1);
      if (routeName === "inbox") {
        const newInbox = replaceMail(inbox, action);
        return { ...state, inbox: newInbox };
      } else if (routeName === "sent") {
        const newSent = replaceMail(sent, action);
        return { ...state, sent: newSent };
      } else if (routeName === "starred") {
        const mail = inbox.find((mail) => mail._id === action.payload.mail._id);
        if (mail) {
          const newInbox = replaceMail(inbox, action);
          return { ...state, inbox: newInbox };
        } else {
          const newSent = replaceMail(sent, action);
          return { ...state, sent: newSent };
        }
      }
      return state;
    }
    case MailActionTypes.DELETE_MAIL: {
      const routeName = action.payload.routeName.substring(1);
      if (routeName === "inbox") {
        const newInbox = deleteMail(inbox, action);
        return { ...state, inbox: newInbox };
      } else if (routeName === "sent") {
        const newSent = deleteMail(sent, action);
        return { ...state, inbox: newSent };
      } else if (routeName === "starred") {
        const mail = inbox.find((mail) => mail._id === action.payload.mail._id);
        if (mail) {
          const newInbox = deleteMail(inbox, action);
          return { ...state, inbox: newInbox };
        } else {
          const newSent = deleteMail(sent, action);
          return { ...state, inbox: newSent };
        }
      }
      return state;
    }
    default:
      return state;
  }
};
