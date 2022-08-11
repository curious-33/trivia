import { IForm } from "./types";

function validateForm({ values, setErrors }: IForm.Validate) {
  let validationErrors: IForm.ErrorState = {
    amount: {
      type: "unknown",
      message: "",
      hasError: false,
    },
    difficulty: {
      type: "unkown",
      message: "",
      hasError: false,
    },
  };
  if (values) {
    if (!values.difficulty) {
      console.log("values.difficulty", values.difficulty);
      validationErrors["difficulty"] = {
        type: "invalid",
        message: "Difficulty must be selected",
        hasError: true,
      };
    }
    if (!values.amount) {
      console.log("values.amount", values.amount);
      validationErrors["amount"] = {
        type: "invalid",
        message: "Must be greater than 0",
        hasError: true,
      };
    }
  }

  if (
    validationErrors["amount"]?.hasError ||
    validationErrors["difficulty"]?.hasError
  ) {
    setErrors(validationErrors);
    return false;
  }

  return true;
}

export default validateForm;
