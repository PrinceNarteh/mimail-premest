import React from "react";
import { MailType } from "../context/mail/mail.reducer";
import { useAppContext } from "../hooks/useAppContext";
import { MailItem } from "./Mail/MailItem";

export const Sent = () => {
  const {
    state: { mails },
  } = useAppContext();

  return (
    <div>
      {mails.sent &&
        mails.sent.map((mail: MailType) => (
          <MailItem key={mail._id} {...mail} />
        ))}
    </div>
  );
};
