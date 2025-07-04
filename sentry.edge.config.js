module.exports = {
  // Your Sentry DSN
  dsn: process.env.SENTRY_DSN,
  // Your Sentry organization and project names
  organization: 'codeforge-ai',
  project: 'javascript-nextjs',
  // Enable performance monitoring
  tracesSampleRate: 1.0,
}