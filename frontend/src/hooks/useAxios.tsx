import { client } from "../api/axiosInstance";
import { useLocalStorage } from "./useLocalStorage";

export const useAxios = () => {
  const { storedValue } = useLocalStorage();

  //   return (client.interceptors.request.common[
  //     "Authorization"
  //   ] = `Bearer ${storedValue.token}`);
};
