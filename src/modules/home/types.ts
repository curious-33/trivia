import { ReactNode } from "react";

export namespace IForm {
  export interface ErrorMessage {
    type?: string;
    message: string;
    hasError: boolean;
  }
  export interface ErrorState {
    amount: ErrorMessage | null;
    difficulty: ErrorMessage | null;
  }

  export interface ISetValue {
    name: string;
    value: any;
  }

  export interface State {
    amount: string;
    difficulty: string | null;
  }

  export interface Validate {
    values: State;
    setErrors: Function;
  }

  export interface HandlerChildrenProps {
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    values: State;
    errors: ErrorState | null;
    setValue: Function;
  }

  export interface Handler {
    children(props: HandlerChildrenProps): ReactNode;
  }
}
