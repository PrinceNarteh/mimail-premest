import React from "react";
import { MailType } from "../context/mail/mail.context";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";

export const Sent = () => {
  const {
    state: { sent },
  } = useAuth();

  return (
    <div>
      {sent &&
        sent.map((mail: MailType) => <MailItem key={mail._id} {...mail} />)}
    </div>
  );
};
