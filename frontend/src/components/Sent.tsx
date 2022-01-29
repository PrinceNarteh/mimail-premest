import React from "react";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";

export const Sent = () => {
  const { user } = useAuth();

  return (
    <div>
      {user?.sent.map((mail) => (
        <MailItem {...mail} />
      ))}
    </div>
  );
};
