import styled from "styled-components";
import { theme } from "./../../theme/theme";

export const HeaderContainer = styled.div`
  background-color: ${theme.colors.primaryColorDark};
  height: 6rem;
  color: green;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  font-size: 3rem;
  color: ${theme.colors.white};
`;
