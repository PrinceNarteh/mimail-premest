import axios from "axios";
import { StateType } from "../context/mainContext";

export const client = axios.create({
  baseURL: "http://localhost:4000/api",
});

client.interceptors.request.use(
  (config) => {
    let storedData = window.localStorage.getItem("mi_mail");
    if (storedData !== null) {
      const data: StateType = JSON.parse(storedData);
      const headers = config.headers!;
      headers.Authorization = `Bearer ${data.auth.token}`;
      return config;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
