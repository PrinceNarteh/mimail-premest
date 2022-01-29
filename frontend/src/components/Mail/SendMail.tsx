import styled from "styled-components";
import { RoundedButton } from "../SideNav/SideNav.style";

export const SendMail = () => {
  return (
    <SendMailStyle>
      <form action="">
        <FormGroup>
          <label htmlFor="to">To:</label>
          <input type="text" name="to" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Subject</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </FormGroup>
        <RoundedButton>Send</RoundedButton>
      </form>
    </SendMailStyle>
  );
};

const SendMailStyle = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  color: #555;
  font-size: 2rem;

  label {
    display: block;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    color: #777;
    font-size: 1.5rem;
    outline: none;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  textarea {
    width: 100%;
    font-size: 1.5rem;
    outline: none;
    border: none;
    border: 1px solid #ccc;
    margin-top: 1rem;
    padding: 1rem;
  }
`;
