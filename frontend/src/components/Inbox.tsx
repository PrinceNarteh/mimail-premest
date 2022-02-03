import React from "react";
import { MailType } from "../context/mail/mail.context";
import { useAppContext } from "../hooks/useAppContext";
import { MailItem } from "./Mail/MailItem";

export const Inbox = () => {
  const {
    state: { mails },
  } = useAppContext();

  return (
    <div>
      {mails.inbox &&
        mails.inbox.map((mail: MailType) => (
          <MailItem key={mail._id} {...mail} />
        ))}
    </div>
  );
};
