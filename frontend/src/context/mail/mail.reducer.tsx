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

export const mailReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case MailActionTypes.TOGGLE_STARRED: {
      let {
        mails: { inbox, sent },
      } = state;
      const routeName = action.payload.routeName.substring(1);

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
    default:
      return state;
  }
};
