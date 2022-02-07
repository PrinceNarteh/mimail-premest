import React, { useState } from "react";
import styled from "styled-components";
import { title } from "../helper/utils";

export const useError = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const displayErrors = () => {
    return (
      errors && (
        <ErrorStyle>
          {Object.values(errors).map((error, idx) => (
            <li key={idx}>{title(error)}</li>
          ))}
        </ErrorStyle>
      )
    );
  };

  return { errors, setErrors, displayErrors };
};

const ErrorStyle = styled.ul`
  margin-left: 10%;
  margin-bottom: 1.5rem;

  li {
    color: crimson;
    font-size: 1.6rem;
    padding: 0.2rem 0;
  }
`;
