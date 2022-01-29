import React from "react";
import { MailItem } from "./Mail/MailItem";

const mail = {
  id: "123",
  sender: "Patrick",
  content: "Testing Mail",
};

export const Inbox = () => {
  return (
    <div>
      <MailItem {...mail} />
    </div>
  );
};
