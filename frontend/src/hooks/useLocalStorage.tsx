import { useState } from "react";
import { IState } from "../context/auth.context";

export function useLocalStorage(initialValue?: IState) {
  const [storedValue, setStoredValue] = useState<IState>(() => {
    try {
      const item = window.localStorage.getItem("mi_mail");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  // Re
  const setValue = (value: IState) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem("mi_mail", JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return { storedValue, setValue };
}
