import React from "react";
import { MailType } from "../context/mail/mail.context";
import { useAuth } from "./../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";

export const Inbox = () => {
  const {
    state: { inbox },
  } = useAuth();

  return (
    <div>
      {inbox &&
        inbox.map((mail: MailType) => <MailItem key={mail._id} {...mail} />)}
    </div>
  );
};
