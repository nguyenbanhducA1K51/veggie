const Sentry = require("@sentry/node");
const _ = require("@sentry/tracing");
const {
  NotFoundError,
  ValidationError,
  AuthorizeError,
} = require("./app-errors");

Sentry.init({
  dsn: "https://3f3e671bdab7777262b52390d55e93d4@o4506844125265920.ingest.sentry.io/4506844127166464",
  tracesSampleRate: 1.0,
});

module.exports = (app) => {
  app.use((error, req, res, next) => {
    let reportError = true;

    // skip common / known errors
    [NotFoundError, ValidationError, AuthorizeError].forEach((typeOfError) => {
      if (error instanceof typeOfError) {
        reportError = false;
      }
    });

    if (reportError) {
      Sentry.captureException(error);
    }
    const statusCode = error.statusCode || 500;
    const data = error.data || error.message;
    return res.status(statusCode).json(data);
  });
};
