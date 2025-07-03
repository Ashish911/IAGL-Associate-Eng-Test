// Made handlers so that every response will be consistent wether it is success or error. This way a lot of code can be reused and we can easily change the response structure in one place.

// Success handler
const successHandler = (res, data, message = "Success", status = 200) => {
  res.status(status).json({ success: true, message, data });
};

// Error handler
const errorHandler = (res, message = "Error", status = 400) => {
  res.status(status).json({ success: false, message });
};

module.exports = {
  successHandler,
  errorHandler,
};
