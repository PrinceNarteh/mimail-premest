import React from "react";
import { MailType } from "../context/auth.types";
import { useAuth } from "../hooks/useAuth";
import { MailItem } from "./Mail/MailItem";

export const Sent = () => {
  const {
    state: { user },
  } = useAuth();

  return (
    <div>
      {user?.sent.map((mail: MailType) => (
        <MailItem key={mail._id} {...mail} />
      ))}
    </div>
  );
};
