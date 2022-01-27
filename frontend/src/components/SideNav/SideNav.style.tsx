import styled from "styled-components";

export const SideNavContainer = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  #toggle:checked + nav {
    width: 30rem;
  }
`;

export const Nav = styled.nav`
  position: fixed;
  width: 6rem;
  background-color: teal;
  height: 100%;
  transition: 0.3s;
  overflow: hidden;
`;

export const Toggle = styled.div`
  width: 6rem;
  height: 6rem;
  text-align: center;
  line-height: 6rem;
  color: white;
  cursor: pointer;

  label {
    width: 6rem;
    height: 6rem;
    background-color: red;
  }
`;

export const Brand = styled.div`
  width: 30rem;
  height: 20rem;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: cyan;
`;

export const Menus = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MenuItem = styled.li`
  position: relative;
  width: 100%;
  list-style: none;
  transition: border-radius 0.5s;

  &:hover {
    background: #fff;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
  }

  &:hover a::before {
    content: "";
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: -5rem;
    background: transparent;
    border-radius: 50%;
    box-shadow: 3.5rem 3.5rem 0 1rem #fff;
    pointer-events: none;
  }

  &:hover a::after {
    content: "";
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    bottom: -5rem;
    background: transparent;
    border-radius: 50%;
    box-shadow: 3.5rem -3.5rem 0 1rem #fff;
    pointer-events: none;
  }
`;
