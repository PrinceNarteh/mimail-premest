import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Sender, Content } from "./MailBox.style";
import { capitalize } from "./../../helper/utils";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client } from "../../api/axiosInstance";
import { useAuth } from "../../hooks/useAuth";
import { AuthAction } from "../../context/auth/auth.action";

interface MailItemProps {
  _id: string;
  sender: string;
  title: string;
  body: string;
  starred: boolean;
}

export const MailItem = ({
  _id,
  sender,
  title,
  body,
  starred,
}: MailItemProps) => {
  const { dispatch } = useAuth();
  const location = useLocation();
  const routeName = location.pathname === "/" ? "inbox" : location.pathname;

  const toggleStarred = async () => {
    try {
      const response = await client.post(`/mail/starred/${_id}`);
      dispatch(AuthAction.toggleStarred(response.data.mail, routeName));
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
        <Sender>{title}</Sender>
        <Content>{body}</Content>
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
