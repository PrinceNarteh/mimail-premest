import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HeaderContainer, Logo } from "./Header.style";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MiMail</Logo>
      <AiOutlineSetting size={25} color="#fff" />
    </HeaderContainer>
  );
};
