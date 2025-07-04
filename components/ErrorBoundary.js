import * as Sentry from '@sentry/react';

const ErrorBoundary = ({ children }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
          <p>{componentStack}</p>
          <button onClick={resetError}>Reset</button>
        </div>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;