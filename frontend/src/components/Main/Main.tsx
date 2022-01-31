import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { MailBox } from "../Mail/MailBox";
import { Heading } from "../Shared/Shared";
import { MainContainer } from "./Main.style";

export const Main = () => {
  const location = useLocation();

  const pathName = location.pathname === "/" ? "inbox" : location.pathname;
  const routeName = pathName.replace("/", "").split("/")[0];
  const componentName = routeName[0].toUpperCase() + routeName.substring(1);

  return (
    <MainContainer>
      <Header />
      <Heading>{componentName}</Heading>
      <MailBox />
    </MainContainer>
  );
};
