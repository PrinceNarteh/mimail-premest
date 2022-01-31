import React from "react";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";
import { IMail } from "./../context/auth.context";

export const Starred = () => {
  const { user } = useAuth();

  const inboxMail = user?.inbox.filter((mail) => mail.starred)!;
  const sentMail = user?.sent.filter((mail) => mail.starred)!;
  const starredMails: IMail[] = [...inboxMail, ...sentMail];

  return (
    <div>
      {starredMails.map((mail) => (
        <MailItem key={mail._id} {...mail} />
      ))}
    </div>
  );
};
