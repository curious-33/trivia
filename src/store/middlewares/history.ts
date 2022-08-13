import { routerMiddleware as middlewareRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const routerMiddleware = middlewareRouter(history);

export default routerMiddleware;
