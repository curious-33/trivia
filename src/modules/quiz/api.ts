import { AxiosPromise } from "axios";

import { Interceptor } from "services";
import { queryBuilder } from "utils";
import * as Types from "./types";

export const startQuiz = ({
  params,
}: {
  params: Types.IForm.State;
}): AxiosPromise<Types.IApi.StartQuiz.Response> =>
  Interceptor.post(
    queryBuilder(`/api.php`, {
      extra: params as Types.IApi.StartQuiz.Params,
    })
  );
