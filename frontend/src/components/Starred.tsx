import React from "react";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";
import { MailType } from "../context/auth.types";

export const Starred = () => {
  const { user } = useAuth();

  const inboxMail = user?.inbox.filter((mail: MailType) => mail.starred)!;
  const sentMail = user?.sent.filter((mail: MailType) => mail.starred)!;
  const starredMails: MailType[] = [...inboxMail, ...sentMail];

  return (
    <div>
      {starredMails.map((mail: MailType) => (
        <MailItem key={mail._id} {...mail} />
      ))}
    </div>
  );
};
