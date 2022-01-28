import styled from "styled-components";

export const HiddenInput = styled.input`
  display: none;

  &:checked + nav {
    width: 30rem;
  }

  &:checked ~ div {
    margin-left: 30rem;
  }
`;
