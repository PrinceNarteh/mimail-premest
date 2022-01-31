import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  width: 6rem;
  background-color: teal;
  height: 100%;
  transition: 0.3s;
  overflow: hidden;
  padding-right: 1rem;
`;

export const NavGroup = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: red;
`;

export const Toggle = styled.label`
  position: absolute;
  right: 0;
  width: 6rem;
  height: 6rem;
  text-align: center;
  line-height: 6rem;
  color: white;
  cursor: pointer;
  z-index: 1;
`;

export const Brand = styled.div`
  width: 30rem;
  height: 18rem;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;

  p {
    font-size: 2.3rem;
    color: white;
    margin-top: 1rem;
  }
`;

export const Avatar = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
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
