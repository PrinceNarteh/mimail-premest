export type MailType = {
  _id: string;
  sender: string;
  recipient: string;
  read: boolean;
  title: string;
  body: string;
  starred: boolean;
};
