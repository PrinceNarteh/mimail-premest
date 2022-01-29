import React from "react";
import { MailItem } from "./Mail/MailItem";
import { useAuth } from "./../hooks/useAuth";

export const Inbox = () => {
  const { user } = useAuth();

  return (
    <div>
      {user?.inbox.map((mail) => (
        <MailItem {...mail} />
      ))}
    </div>
  );
};
