const globalError = (err, req, res, next) => {
  const error = new Error(err.message ? err.message : 'Internal server error');
  const status = err.status ? err.status : 500;
  res.status(status).json({
    message: error,
  });
};

module.exports = globalError;
