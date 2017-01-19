const defaults = require('../../defaults');

module.exports = buildRequest = (
	req,
	res,
	done
) => {
	req.method = req._req.method;
	req.url = req._req.url;

	done(
		req,
		res
	);
};