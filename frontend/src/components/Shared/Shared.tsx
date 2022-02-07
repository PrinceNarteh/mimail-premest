import styled, { css } from "styled-components";

interface HeadingProps {
  fontSize?: number;
  textAlign?: "left" | "center" | "right";
}

export const Heading = styled.h1`
  margin: 0 0 2rem 2rem;
  font-size: ${({ fontSize }: HeadingProps) =>
    fontSize ? `${fontSize}rem` : "3rem"};
  text-align: ${({ textAlign }: HeadingProps) =>
    textAlign ? textAlign : "left"};
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem;
  color: #555;
  font-size: 2rem;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  color: #777;
  font-size: 1.5rem;
  outline: none;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border: 1px solid #ccc;
  margin-top: 1rem;
  padding: 1rem;
`;

export const CardContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 50rem;
  max-width: 50rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 2rem;
`;
export const Form = styled.form`
  width: 100%;
`;

export const RoundedButton = styled.button`
  width: ${({ fullWidth }: { fullWidth?: boolean }) => fullWidth && "90%"};
  background: cyan;
  color: teal;
  padding: 1rem 0;
  border: none;
  border-radius: 5rem;
  margin: 0.8rem;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;

  ${({ fullWidth }: { fullWidth?: boolean }) =>
    !fullWidth &&
    css`
      padding: 1rem 5rem;
    `}
`;
