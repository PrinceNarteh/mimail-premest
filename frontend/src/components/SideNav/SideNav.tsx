import { MenuLink } from "./MenuLink";
import { Avatar, Brand, Menus, Nav, Toggle } from "./SideNav.style";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "./../../hooks/useAuth";
import { HiddenInput } from "./HiddenInput";
import { GrSend } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { RiSpam2Line } from "react-icons/ri";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";
import { capitalize } from "./../../helper/utils";
import { RoundedButton } from "../Shared/Shared";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const SideNav = () => {
  const {
    state: { user },
  } = useAuth();
  const [toggle, setToggle] = useState<boolean>(true);
  const [name, setName] = useState("");
  const { storedValue } = useLocalStorage();

  useEffect(() => {
    setName(user?.username!);
  }, [user?.username]);

  console.log(user);
  console.log(storedValue);

  return (
    <>
      <HiddenInput type="checkbox" id="toggle" />
      <Nav>
        <Toggle htmlFor="toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaBars size={25} /> : <FaTimes size={25} />}
        </Toggle>
        <Brand>
          <Avatar>{user?.username[0].toUpperCase()}</Avatar>
          <p>{capitalize(user?.username)}</p>
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
