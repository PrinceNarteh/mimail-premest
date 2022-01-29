import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Sender, Content } from "./MailBox.style";

interface MailItemProps {
  id: string;
  sender: string;
  content: string;
}

export const MailItem = ({ id, sender, content }: MailItemProps) => {
  const location = useLocation();

  const routeName = location.pathname === "/" ? "inbox" : location.pathname;

  return (
    <MailItemStyle to={`${routeName}/${id}`}>
      <Sender>{sender}</Sender>
      <Content>{content}</Content>
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
