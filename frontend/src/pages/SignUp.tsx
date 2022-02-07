import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { AuthActionTypes } from "../context/auth/auth.action";
import { useAppContext } from "../hooks/useAppContext";
import { useError } from "../hooks/useError";
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
  const { setErrors, displayErrors } = useError();

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
      setErrors(err.response.data);
    }
  };

  return (
    <CardContainer>
      <Card>
        <Heading fontSize={5} textAlign="center">
          MiMail
        </Heading>
        {displayErrors()}
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
