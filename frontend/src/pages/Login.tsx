import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { client } from "../api/axiosInstance";
import {
  Card,
  CardContainer,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  Paragraph,
  RoundedButton,
} from "../components/Shared/Shared";
import { AuthAction } from "../context/auth/auth.action";
import { useAppContext } from "../hooks/useAppContext";
import { useError } from "../hooks/useError";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const { setValue } = useLocalStorage();
  const { setErrors, displayErrors } = useError();

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const result = await client.post("/auth/login", formData);
      dispatch(AuthAction.login(result.data));
      setValue({
        ...state,
        ...result.data.user,
      });

      const redirectPath = location.state?.path || "/";
      navigate(redirectPath, { replace: true });
    } catch (err: any) {
      setErrors(err.response.data);
    }
  };

  return (
    <>
      <Head>
        <h1>MiMail</h1>
      </Head>
      <CardContainer>
        <Card>
          <Heading fontSize={5} textAlign="center">
            Login
          </Heading>
          <Form onSubmit={onSubmitHandler}>
            {displayErrors()}
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                type="text"
                value={formData.username}
                onChange={onChangeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                value={formData.password}
                onChange={onChangeHandler}
              />
            </FormGroup>
            <RoundedButton type="submit">Login</RoundedButton>
          </Form>
          <Paragraph>
            Need an account? Register <Link to="/signup">Here</Link>
          </Paragraph>
        </Card>
      </CardContainer>
    </>
  );
};

const Head = styled.div`
  position: fixed;
  line-height: 6rem;
  color: teal;
  width: 100%;
  padding-left: 10rem;
  height: 6rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;
