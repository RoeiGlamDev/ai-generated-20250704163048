import ErrorBoundary from '../components/ErrorBoundary';
import * as Sentry from '@sentry/react';

const CustomErrorPage = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (hasGetInitialPropsRun) {
    // If `getInitialProps` has run, then we can log the error
    Sentry.captureException(err);
  }

  return (
    <ErrorBoundary>
      <div>
        <h1>Error {statusCode}</h1>
        <p>{err.message}</p>
      </div>
    </ErrorBoundary>
  );
};

export default CustomErrorPage;