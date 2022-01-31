import axios from "axios";

const data = localStorage.getItem("mi_mail");
let token;
if (data) {
  const result = JSON.parse(data);
  token = result.token;
}

export const client = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
