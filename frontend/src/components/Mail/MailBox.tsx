import { FaStar } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { Head, MailBoxContainer } from "./MailBox.style";

export const MailBox = () => {
  return (
    <MailBoxContainer>
      <Head>
        <h1>Mail Box</h1>
        <FaStar />
      </Head>
      <>
        <Outlet />
      </>
    </MailBoxContainer>
  );
};
