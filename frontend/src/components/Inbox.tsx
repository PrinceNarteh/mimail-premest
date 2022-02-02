import React from "react";
import { MailItem } from "./Mail/MailItem";
import { useAuth } from "./../hooks/useAuth";
import { MailType } from "../context/auth.types";

export const Inbox = () => {
  const {
    state: { user },
  } = useAuth();

  return (
    <div>
      {user?.inbox.map((mail: MailType) => (
        <MailItem key={mail._id} {...mail} />
      ))}
    </div>
  );
};
