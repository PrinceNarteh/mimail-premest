import { MailType } from "./mail.context";

export const MailActionTypes = {
  ADD_MAIL: "ADD_MAIL",
  ADD_MAILS: "ADD_MAILS",
  DELETE_MAIL: "DELETE_MAIL",
  TOGGLE_STARRED: "TOGGLE_STARRED",
};

export const MailAction = {
  addMails: (mails: { inbox: MailType[]; sent: MailType[] }) => ({
    type: MailActionTypes.ADD_MAILS,
    payload: mails,
  }),
  addMail: (mail: MailType, category: string) => ({
    type: MailActionTypes.ADD_MAIL,
    payload: { category, mail },
  }),
  deleteMail: (mailId: string, category: string) => ({
    type: MailActionTypes.DELETE_MAIL,
    payload: { category, mailId },
  }),
  toggleStarred: (mail: MailType, routeName: string) => ({
    type: MailActionTypes.TOGGLE_STARRED,
    payload: { mail, routeName },
  }),
};
