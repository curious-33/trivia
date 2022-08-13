import config from "config";
import logger from "./logger";
import history from "./history";

let middlewares: any[] = [];

if (config.app.env === "development") {
  middlewares.push(logger);
  middlewares.push(history);
}

export default middlewares;
