const {
  REACT_APP_API_BASE_URL,
  REACT_APP_VERSION,
  REACT_APP_ENV,
} = process.env;

interface IApp {
  name: string;
  version: string | undefined;
  env: string | undefined;
}

interface IApi {
  base_url: string | undefined;
}

interface IConfig {
  app: IApp;
  api: IApi;
}

const config: IConfig = {
  app: {
    name: "TRIVIA",
    version: REACT_APP_VERSION,
    env: REACT_APP_ENV,
  },
  api: {
    base_url: REACT_APP_API_BASE_URL,
  },
};

export default config;
