import { MailActionTypes } from "./mail.action";

export type MailType = {
  _id: string;
  sender: string;
  recipient: string;
  read: boolean;
  title: string;
  body: string;
  starred: boolean;
};

type ActionType = {
  type: string;
  payload: any;
};

export type ActionState = {
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
  state: ActionState,
  action: ActionType
): ActionState => {
  let { inbox, sent } = state;
  const routeName = action.payload.routeName.substring(1);

  switch (action.type) {
    case MailActionTypes.ADD_MAILS: {
      return {
        inbox: action.payload.inbox,
        sent: action.payload.sent,
      };
    }
    case MailActionTypes.ADD_MAIL: {
      const newInbox = [action.payload.mail, ...state.inbox];
      return { ...state, inbox: newInbox };
    }
    case MailActionTypes.TOGGLE_STARRED: {
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
