import React from "react";
import { HeaderContainer, Logo } from "./Header.style";
import { AiOutlineSetting } from "react-icons/ai";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>MiMail</Logo>
      <AiOutlineSetting size={25} color="#fff" />
    </HeaderContainer>
  );
};
