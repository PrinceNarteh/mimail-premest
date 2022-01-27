import { Avatar, Brand, Nav, SideNavContainer, Toggle } from "./SideNav.style";

export const SideNav = () => {
  return (
    <SideNavContainer>
      <input type="checkbox" id="toggle" checked />
      <Nav>
        <Toggle>TT</Toggle>
        <Brand>
          <Avatar>PN</Avatar>
        </Brand>
      </Nav>
    </SideNavContainer>
  );
};
