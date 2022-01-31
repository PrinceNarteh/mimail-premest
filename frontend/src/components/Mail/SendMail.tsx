import styled from "styled-components";
import {
  FormGroup,
  Input,
  Label,
  RoundedButton,
  Textarea,
} from "../Shared/Shared";

export const SendMail = () => {
  return (
    <SendMailStyle>
      <form action="">
        <FormGroup>
          <Label htmlFor="to">To:</Label>
          <Input type="text" name="to" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" name="subject" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Subject</Label>
          <Textarea name="message" id="message" cols={30} rows={10}></Textarea>
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
