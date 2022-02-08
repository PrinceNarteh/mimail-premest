import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { client } from "../../api/axiosInstance";
import { MailAction } from "../../context/mail/mail.action";
import { useAppContext } from "../../hooks/useAppContext";
import {
  FormGroup,
  Input,
  Label,
  RoundedButton,
  Textarea,
} from "../Shared/Shared";
import { GrSend } from "react-icons/gr";

export const SendMail = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    subject: "",
    message: "",
  });
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await client.post("/mails/send", formData);
      dispatch(MailAction.addMail(res.data.mail));
      navigate("/inbox");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SendMailStyle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="to">Recipient:</Label>
          <Input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></Textarea>
        </FormGroup>
        <RoundedButton>
          <GrSend size={15} /> Send
        </RoundedButton>
      </form>
    </SendMailStyle>
  );
};

const SendMailStyle = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem;
`;
