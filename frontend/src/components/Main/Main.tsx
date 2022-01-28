import React from "react";
import { Header } from "../Header/Header";
import { MailBox } from "../Mail/MailBox";
import { Heading, MainContainer } from "./Main.style";

export const Main = () => {
  return (
    <MainContainer>
      <Header />
      <Heading>Dashboard</Heading>
      <MailBox />
    </MainContainer>
  );
};
