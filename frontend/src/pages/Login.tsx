import React, { useState } from "react";
import { client } from "../api/axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { AuthActionTypes } from "./../context/auth.action";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { dispatch } = useAuth();
  const { setValue } = useLocalStorage();
  const navigate = useNavigate();
  const location = useLocation() as any;

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      const result = await client.post("/auth/login", formData);
      dispatch({ type: AuthActionTypes.LOGIN_SUCCESS, payload: result.data });
      setValue({ loading: false, error: null, ...result.data });

      const redirectPath = location.state?.path || "/";
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChangeHandler}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
