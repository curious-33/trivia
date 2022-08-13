import config from "config";

interface IActionReturn {
  type: string;
  payload: unknown;
}

export interface ICreateRoutine {
  REQUEST: any;
  SUCCESS: any;
  FAILURE: any;

  request: (payload: unknown) => IActionReturn;
  success: (payload: unknown) => IActionReturn;
  failure: (payload: unknown) => IActionReturn;
}

export function createRoutine(
  module_name: string,
  action_type: string
): ICreateRoutine {
  const base = `${config.app.name}/${module_name}/${action_type}`;
  const requestType = `${base}__REQUEST`;
  const successType = `${base}__SUCCESS`;
  const failureType = `${base}__FAILURE`;

  return {
    REQUEST: requestType,
    SUCCESS: successType,
    FAILURE: failureType,
    request: (payload: unknown) => ({
      type: requestType,
      payload,
    }),
    success: (payload: unknown) => ({
      type: successType,
      payload,
    }),
    failure: (payload: unknown) => ({
      type: failureType,
      payload,
    }),
  };
}
