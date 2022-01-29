import { MenuLink } from "./MenuLink";
import { Avatar, Brand, Menus, Nav, Toggle } from "./SideNav.style";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "./../../hooks/useAuth";
import { HiddenInput } from "./HiddenInput";
import { GrSend } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { RiSpam2Line } from "react-icons/ri";
import { MdOutlineForwardToInbox } from "react-icons/md";

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
          <p>
            {user?.username[0].toUpperCase()! + user?.username.substring(1)}
          </p>
        </Brand>
        <Menus>
          <MenuLink
            label="Inbox"
            to="/inbox"
            icon={<MdOutlineForwardToInbox size={30} />}
          />
          <MenuLink
            label="Sent"
            to="/sent"
            icon={<GrSend size={30} color="#fff" />}
          />
          <MenuLink
            label="Starred"
            to="/starred"
            icon={<AiOutlineStar size={30} />}
          />
          <MenuLink label="Spam" to="/spam" icon={<RiSpam2Line size={30} />} />
          {/* <MenuLink
            label="Inbox"
            to="/inbox"
            icon={<MdOutlineForwardToInbox size={30} />}
          /> */}
        </Menus>
      </Nav>
    </>
  );
};
