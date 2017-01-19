const defaults = require('../../defaults');

module.exports = sendResponse = (
	req,
	res,
	done
) => {
	res._res.writeHead(
		res.status || defaults.status,
		Object.assign(defaults.headers, res.headers)
	);

	if (res.stream) {
		res.stream.pipe(res._res);
	} else {
		res._res.end(res.data);
	}

	done(
		req,
		res
	);
};