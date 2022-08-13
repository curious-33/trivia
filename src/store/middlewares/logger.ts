import { createLogger } from "redux-logger";

const logger = createLogger({
  duration: true,
  timestamp: true,
  level: "log",
  collapsed: true,
});

export default logger;
