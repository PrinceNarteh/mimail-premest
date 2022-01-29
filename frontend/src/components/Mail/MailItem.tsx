import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Sender, Content } from "./MailBox.style";

interface MailItemProps {
  _id: string;
  sender: string;
  title: string;
  body: string;
}

export const MailItem = ({ _id, sender, title, body }: MailItemProps) => {
  const location = useLocation();

  const routeName = location.pathname === "/" ? "inbox" : location.pathname;

  return (
    <MailItemStyle to={`${routeName}/${_id}`}>
      <Sender>{sender}</Sender>
      <Sender>{title}</Sender>
      <Content>{body}</Content>
    </MailItemStyle>
  );
};

const MailItemStyle = styled(Link)`
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1px;
  text-decoration: none;
  color: #777;
  cursor: pointer;
`;
