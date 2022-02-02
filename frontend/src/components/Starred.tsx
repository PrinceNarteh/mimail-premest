import React from "react";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";
import { MailType } from "../context/auth.types";

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
