import React from "react";
import { MailItem } from "./Mail/MailItem";
import { useAuth } from "./../hooks/useAuth";

export const Inbox = () => {
  const { user } = useAuth();
  console.log(user?.inbox);

  return (
    <div>
      {user?.inbox.map((mail) => (
        <MailItem key={mail._id} {...mail} />
      ))}
    </div>
  );
};
