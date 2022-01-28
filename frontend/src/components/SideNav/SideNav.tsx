import { MenuLink } from "./MenuLink";
import { Avatar, Brand, Menus, Nav, Toggle } from "./SideNav.style";
import { FaInbox, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "./../../hooks/useAuth";
import { HiddenInput } from "./HiddenInput";

export const SideNav = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const { user } = useAuth();
  return (
    <>
      <HiddenInput type="checkbox" id="toggle" checked />
      <Nav>
        <Toggle htmlFor="toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Toggle>
        <Brand>
          <Avatar>P</Avatar>
          <p>{user?.username[0]! + user?.username.substring(1)}</p>
        </Brand>
        <Menus>
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
          <MenuLink label="Inbox" to="/inbox" icon={<FaInbox size={30} />} />
        </Menus>
      </Nav>
    </>
  );
};
