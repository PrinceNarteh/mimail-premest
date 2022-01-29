import React from "react";
import styled from "styled-components";
import { Sender, Content } from "./MailBox.style";

export const MailItem = () => {
  return (
    <MailItemStyle>
      <Sender>Blessing</Sender>
      <Content>Testing mail</Content>
    </MailItemStyle>
  );
};

const MailItemStyle = styled.div`
  background-color: 2rem;
  display: flex;
  font-size: 1.8rem;
  margin-bottom: 1px;
`;
