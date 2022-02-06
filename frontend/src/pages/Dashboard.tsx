import { useEffect } from "react";
import { client } from "../api/axiosInstance";
import { Main } from "../components/Main/Main";
import { SideNav } from "../components/SideNav/SideNav";
import { MailAction } from "../context/mail/mail.action";
import { useAppContext } from "../hooks/useAppContext";
import { Container } from "./Dashboard.style";

export const Dashboard = () => {
  const { dispatch } = useAppContext();

  useEffect(() => {
    const getMails = async () => {
      try {
        const mails = await client.post("/mails/get-mails");
        dispatch(MailAction.addMails(mails.data));
      } catch (error) {
        console.log(error);
      }
    };
    getMails();
  }, [dispatch]);

  return (
    <Container>
      <SideNav />
      <Main />
    </Container>
  );
};
