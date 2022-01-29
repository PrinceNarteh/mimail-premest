import styled from "styled-components";

export const MailBoxContainer = styled.div`
  max-width: 90%;
  min-height: calc(80% - 6rem);
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  overflow: hidden;
`;

export const Head = styled.div`
  background-color: teal;
  padding: 1rem;
  color: white;
`;

export const Sender = styled.div`
  flex-basis: 20%;
  padding: 1rem 2rem;
  background-color: white;
`;
export const Content = styled.div`
  flex: 1;
  padding-left: 1rem;
  margin-left: 2px;
  padding: 1rem 2rem;
  background-color: white;
`;
