import { MenuLink } from "./MenuLink";
import {
  Avatar,
  Brand,
  Menus,
  Nav,
  SideNavContainer,
  Toggle,
} from "./SideNav.style";
import { FaInbox, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const SideNav = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  return (
    <SideNavContainer>
      <input type="checkbox" id="toggle" />
      <Nav>
        <Toggle htmlFor="toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Toggle>
        <Brand>
          <Avatar>PN</Avatar>
        </Brand>
        <Menus>
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
        </Menus>
      </Nav>
    </SideNavContainer>
  );
};
