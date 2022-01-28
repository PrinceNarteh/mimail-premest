import { useEffect, useState } from "react";
import { IAuthContext } from "../context/auth.context";

const getSavedValue = (initialValue: any) => {
  const data = localStorage.getItem("mi_mail");
  const savedValue = data ? JSON.parse(data) : null;
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export const useLocalStorage = (
  initialValue?: Omit<IAuthContext, "dispatch">
) => {
  const [value, setValue] = useState<Omit<IAuthContext, "dispatch">>(() =>
    getSavedValue(initialValue)
  );

  useEffect(() => {
    localStorage.setItem("mi_mail", JSON.stringify(initialValue));
  }, [initialValue]);

  return { value, setValue };
};
