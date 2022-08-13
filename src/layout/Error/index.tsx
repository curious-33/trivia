import { ErrorBoundary } from "react-error-boundary";

import { Button } from "components";
import styles from "./error.module.scss";

interface IError {
  message: string;
}

interface IErrorFallBack {
  error: IError;
  resetErrorBoundary: Function;
}

function ErrorFallback({ error, resetErrorBoundary }: IErrorFallBack) {
  return (
    <div className={styles.errorBoundary} role="alert">
      <h1 className={styles.errorBoundaryTitle}>Something went wrong</h1>
      <p className={styles.errorBoundaryMessage}>
        Error occured: {error.message}
      </p>
      <Button
        name="Go home"
        variant="orange"
        onClick={() => {
          window.location.href = "/";
        }}
      />
    </div>
  );
}

const UI = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
    onError={(error, componentStack) => {
      console.log(error);
      console.log("Error has arised: ", componentStack);
    }}
  >
    {children}
  </ErrorBoundary>
);

export default UI;
