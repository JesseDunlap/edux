const edux = require('../index');
const errors = require('edux-errors');
const responses = require('edux-responses');

const postReducer = (req, res, done) => (
	done(
		req,
		res,
		[responses.text('POST Hello world!')]
	)
);

const getReducer = (req, res, done) => (
	done(
		req,
		res,
		[responses.text('GET Hello world!')]
	)
);

edux(req => {
	switch (req.method) {
		case 'GET':
			return [getReducer];
		case 'POST':
			return [postReducer];
		default:
			return [errors.notFound()];
	}
}).listen(3000);