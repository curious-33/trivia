import React, { useState } from "react";
import validateForm from "./validation";
import * as Types from "./types";

const FormModule: React.FC<Types.IForm.Handler> = ({ children }) => {
  const [values, setValues] = useState<Types.IForm.State>({
    difficulty: "",
    amount: "",
  });

  const [errors, setErrors] = useState<Types.IForm.ErrorState | null>(null);

  const setValue = (props: Types.IForm.ISetValue) => {
    const { name, value } = props;

    setValues({
      ...values,
      [name]: value,
    });

    //@ts-ignore
    setErrors({
      ...(errors ? errors : {}),
      [name]: null,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm({ values, setErrors })) {
      console.log("submit values", values);
    }
  };

  console.log("values", values);
  console.log("errors", errors);

  return (
    <>
      {children({
        handleSubmit,
        values: values,
        errors: errors,
        setValue,
      })}
    </>
  );
};

export default FormModule;
