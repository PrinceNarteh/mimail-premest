import React from "react";
import { MailType } from "../context/mail/mail.context";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";

export const Starred = () => {
  const {
    state: { inbox, sent },
  } = useAuth();

  const inboxMail = inbox && inbox.filter((mail: MailType) => mail.starred)!;
  const sentMail = sent && sent.filter((mail: MailType) => mail.starred)!;
  const starredMails: MailType[] = [];

  return (
    <div>
      {starredMails &&
        starredMails.map((mail: MailType) => (
          <MailItem key={mail._id} {...mail} />
        ))}
    </div>
  );
};
