// import { ErrorBoundary } from "react-error-boundary";

// import "./error.module.scss";

// interface IError {
//   message: string;
// }

// interface IErrorFallBack {
//   error: IError;
//   resetErrorBoundary: Function;
// }

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div className="errorBoundary" role="alert">
//       <h1 className="errorBoundary-title">something_went_wrong:</h1>
//       <p className="errorBoundary-message">error_occured: {error.message}</p>
//       <button>Go home</button>
//     </div>
//   );
// }

// const UI = ({ children }) => (
//   <ErrorBoundary
//     FallbackComponent={ErrorFallback}
//     onReset={() => {
//       // reset the state of your app so the error doesn't happen again
//     }}
//     onError={(error, componentStack) => {
//       console.log(error);
//       console.log("Error has arised: ", componentStack);
//     }}
//   >
//     {children}
//   </ErrorBoundary>
// );

// export default UI;
export {};
