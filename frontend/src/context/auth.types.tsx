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
  loading: boolean;
  error: object | null;
  token: string | null;
  user: {
    username: string;
    sent: MailType[];
    inbox: MailType[];
  } | null;
};
