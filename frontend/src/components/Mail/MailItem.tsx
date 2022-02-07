import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { client } from "../../api/axiosInstance";
import { MailAction } from "../../context/mail/mail.action";
import { useAppContext } from "../../hooks/useAppContext";
import { capitalize } from "./../../helper/utils";
import { Content, Sender } from "./MailBox.style";

interface MailItemProps {
  _id: string;
  sender: string;
  subject: string;
  message: string;
  starred: boolean;
}

export const MailItem = ({
  _id,
  sender,
  subject,
  message,
  starred,
}: MailItemProps) => {
  const { dispatch } = useAppContext();
  const location = useLocation();
  const routeName = location.pathname === "/" ? "inbox" : location.pathname;

  const toggleStarred = async () => {
    try {
      const response = await client.post(`/mails/starred/${_id}`);
      dispatch(MailAction.toggleStarred(response.data.mail, routeName));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MailItemContainer>
      <Action onClick={() => toggleStarred()}>
        {starred ? (
          <AiFillStar size={20} color="black" />
        ) : (
          <AiOutlineStar size={20} color="black" />
        )}
      </Action>
      <MailItemStyle to={`${routeName}/${_id}`}>
        <Sender>{sender && capitalize(sender)}</Sender>
        <Sender>{subject}</Sender>
        <Content>{message}</Content>
      </MailItemStyle>
    </MailItemContainer>
  );
};

const MailItemContainer = styled.div`
  display: flex;
  background-color: white;
`;

const MailItemStyle = styled(Link)`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1px;
  text-decoration: none;
  color: #777;
  cursor: pointer;
`;

const Action = styled.span`
  background-color: white;
  padding: 1rem;
  cursor: pointer;
`;
