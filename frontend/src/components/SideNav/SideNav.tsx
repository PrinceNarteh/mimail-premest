import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiSpam2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RoundedButton } from "../Shared/Shared";
import { capitalize } from "./../../helper/utils";
import { useAppContext } from "../../hooks/useAppContext";
import { HiddenInput } from "./HiddenInput";
import { MenuLink } from "./MenuLink";
import { Avatar, Brand, Menus, Nav, Toggle } from "./SideNav.style";
import { LogoutBtn } from "./LogoutBtn";
import { FiSend } from "react-icons/fi";

export const SideNav = () => {
  const {
    state: { auth },
  } = useAppContext();
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <>
      <HiddenInput type="checkbox" id="toggle" />
      <Nav>
        <Toggle htmlFor="toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Toggle>
        <Brand>
          <Avatar>{auth.user?.username[0].toUpperCase()}</Avatar>
          <p>{capitalize(auth.user?.username)}</p>
        </Brand>
        <Link to="send-mail">
          <RoundedButton fullWidth>+</RoundedButton>
        </Link>
        <Menus>
          <MenuLink
            label="Inbox"
            to="/inbox"
            icon={<MdOutlineForwardToInbox size={30} />}
          />
          <MenuLink label="Sent" to="/sent" icon={<FiSend size={30} />} />
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
        <LogoutBtn label="Logout" icon={<FaSignOutAlt size={30} />} />
      </Nav>
    </>
  );
};
