export type MailType = {
  _id: string;
  sender: string;
  recipient: string;
  read: boolean;
  title: string;
  body: string;
  starred: boolean;
};

export type StateType = {
  token: string | null;
  user: {
    username: string;
  } | null;
  sent: MailType[];
  inbox: MailType[];
};
