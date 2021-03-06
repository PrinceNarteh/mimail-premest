import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuItem } from "./SideNav.style";

interface MenuLinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export const MenuLink = ({ icon, label, to }: MenuLinkProps) => {
  return (
    <MenuItem>
      <MenuLinkStyle to={to}>
        <span className="icon">{icon}</span>
        <span className="text">{label}</span>
      </MenuLinkStyle>
    </MenuItem>
  );
};

const MenuLinkStyle = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  font-size: 1.7rem;
  color: white;

  &:hover {
    color: teal;
  }

  .icon {
    position: relative;
    display: block;
    min-width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    position: relative;
    display: block;
    padding: 0 1rem;
    height: 6rem;
    text-align: center;
    line-height: 6rem;
    white-space: nowrap;
  }
`;
