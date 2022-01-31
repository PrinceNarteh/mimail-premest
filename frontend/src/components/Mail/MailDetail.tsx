import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { capitalize } from "../../helper/utils";
import { useAuth } from "../../hooks/useAuth";
import { IMail } from "./../../context/auth.context";

export const MailDetail = () => {
  const [mail, setMail] = useState<IMail>();
  const { routeName, mailId } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    let data;
    if (routeName) {
      data = routeName === "inbox" ? user?.inbox : user?.sent;
    }
    const currentMail = data?.find((mail) => mail._id === mailId);
    setMail(currentMail);
  }, [mailId, routeName, user?.inbox, user?.sent]);

  if (!mail) {
    return <div>Loading</div>;
  }
  return (
    <MailDetailStyle>
      <Actions>
        {mail?.starred ? <AiFillStar size={20} /> : <AiOutlineStar size={20} />}
      </Actions>
      <Group>
        <h3>Sender: </h3> <span>{capitalize(mail?.sender)}</span>
      </Group>
      <Group>
        <h3>Subject: </h3> <span>{mail?.title}</span>
      </Group>
      <Message>
        <h3>Message</h3>
        <p>{mail?.body}</p>
      </Message>
    </MailDetailStyle>
  );
};

const MailDetailStyle = styled.div`
  padding: 2rem;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ccc;

  h3 {
    font-size: 2rem;
  }

  span {
    font-size: 1.8rem;
  }
`;

const Actions = styled.div`
  position: absolute;
  right: 5rem;
  top: 1.1rem;
  z-index: 2;
`;

const Message = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.6rem;
  }
`;
