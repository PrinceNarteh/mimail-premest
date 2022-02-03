import React from "react";
import { MailType } from "../context/mail/mail.context";
import { useAppContext } from "../hooks/useAppContext";
import { MailItem } from "./Mail/MailItem";

export const Starred = () => {
  const {
    state: { mails },
  } = useAppContext();

  const inboxMail = mails.inbox.filter((mail: MailType) => mail.starred)!;
  const sentMail = mails.sent.filter((mail: MailType) => mail.starred)!;
  const starredMails: MailType[] = [...inboxMail, ...sentMail];

  return (
    <div>
      {starredMails &&
        starredMails.map((mail: MailType) => (
          <MailItem key={mail._id} {...mail} />
        ))}
    </div>
  );
};
