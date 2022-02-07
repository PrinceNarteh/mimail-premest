import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { client } from "../api/axiosInstance";
import {
  CardContainer,
  FormGroup,
  Input,
  Label,
  Card,
  Form,
  Heading,
  RoundedButton,
  Paragraph,
  Error,
} from "../components/Shared/Shared";
import { AuthActionTypes } from "../context/auth/auth.action";
import { title } from "../helper/utils";
import { useAppContext } from "../hooks/useAppContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface User {
  username: string;
  password: string;
}

export const SignUp = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    password: "",
  });
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation() as any;
  const { setValue } = useLocalStorage();
  const [error, setError] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await client.post("/auth/signup", formData);
      console.log(result);
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: result.data });
      setValue({
        loading: false,
        error: null,
        ...result.data,
      });

      const redirectPath = location.state?.path || "/";
      navigate(redirectPath, { replace: true });
    } catch (err: any) {
      const res = err.response.data.error;
      const error = res.split(": ")[2];
      setError(error);
    }
  };

  return (
    <CardContainer>
      <Card>
        <Heading fontSize={5} textAlign="center">
          MiMail
        </Heading>
        {error && <Error>{title(error)}</Error>}
        <Form onSubmit={onSubmitHandler}>
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
          <RoundedButton type="submit">Sign Up</RoundedButton>
        </Form>
        <Paragraph>
          Already have an account? Login <Link to="/login">Here</Link>
        </Paragraph>
      </Card>
    </CardContainer>
  );
};
