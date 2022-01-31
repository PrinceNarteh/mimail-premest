import { useState } from "react";
import { IAuthContext } from "../context/auth.context";

export function useLocalStorage(initialValue?: IAuthContext) {
  const [storedValue, setStoredValue] = useState<IAuthContext>(() => {
    try {
      const item = window.localStorage.getItem("mi_mail");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  // Re
  const setValue = (value: IAuthContext) => {
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
