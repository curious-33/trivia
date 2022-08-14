import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { startQuiz } from "./actions";
import validateForm from "./validation";
import * as Types from "./types";
import * as Helpers from "./helper";

const FormModule: React.FC<Types.IForm.Handler> = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm({ values, setErrors })) {
      dispatch(
        startQuiz.request({
          values: {
            type: "boolean",
            category: 15,
            amount: values.amount,
            difficulty: Helpers.getQuizDifficulty(
              values.difficulty ? values.difficulty : ""
            ),
          },
          cb: {
            onSuccess: (data: unknown) => {
              navigate("/quizzes/1");
            },
            onError: (error: unknown) => {
              console.log("Something went wrong: \n", error);
            },
          },
        })
      );
    }
  };

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
