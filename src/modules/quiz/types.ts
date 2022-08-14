import { ReactNode } from "react";
import * as generalTypes from "../types";

export namespace IApi {
  export namespace StartQuiz {
    export interface Response {
      results: Single[];
    }

    export interface Single {
      category: string;
      correct_answer: string;
      difficulty: string;
      incorrect_answers: string[];
      question: string;
      type: boolean;
    }

    export interface Params {
      amount: string;
      difficulty: string;
    }
  }
}

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

export namespace IStore {
  export interface userResult extends IApi.StartQuiz.Single {
    user_answer: string;
  }
  export interface InitialState {
    isLoading: false;
    data: IApi.StartQuiz.Single[];
    result: userResult[];
  }

  export interface HomeAction<T, P> {
    type: T;
    payload: P;
  }

  export interface Request {
    values: IForm.State;
    cb: generalTypes.ICallback;
  }
}

export namespace IHelper {
  export interface Difficulty {
    value: string;
    label: string;
  }
}
