class AppError extends Error {
	constructor(message, statusCode) {
		super(message);

		this.message = message;
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('404') ? 'fail' : 'error';

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = { AppError };