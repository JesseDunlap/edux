function request(req) {
	this.req = req;
};

request.prototype.build = () => {
	return this.req;
};

module.exports = request;