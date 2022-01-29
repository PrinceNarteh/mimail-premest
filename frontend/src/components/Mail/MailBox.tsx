import { Head, MailBoxContainer } from "./MailBox.style";
import { MailItem } from "./MailItem";

export const MailBox = () => {
  return (
    <MailBoxContainer>
      <Head>
        <h1>Mail Box</h1>
      </Head>
      <>
        <MailItem />
        <MailItem />
        <MailItem />
        <MailItem />
      </>
    </MailBoxContainer>
  );
};
