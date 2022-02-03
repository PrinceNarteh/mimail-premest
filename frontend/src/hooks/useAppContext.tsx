import { useContext } from "react";
import { AppContext } from "../context/mainContext";

export const useAppContext = () => {
  return useContext(AppContext);
};
