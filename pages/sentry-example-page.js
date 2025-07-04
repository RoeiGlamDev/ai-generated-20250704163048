import * as Sentry from '@sentry/react';

const SentryExamplePage = () => {
  const handleThrowError = () => {
    throw new Error('Test error');
  };

  const handleCaptureError = () => {
    Sentry.captureException(new Error('Test error'));
  };

  const handleCaptureMessage = () => {
    Sentry.captureMessage('Test message');
  };

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <button onClick={handleThrowError}>Throw Error</button>
      <button onClick={handleCaptureError}>Capture Error</button>
      <button onClick={handleCaptureMessage}>Capture Message</button>
    </div>
  );
};

export default SentryExamplePage;