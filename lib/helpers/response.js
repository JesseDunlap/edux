class Response {
	constructor(res) {
		this.res = res;
		return this;
	}

	text(text) {
		this.res = Object.assign(
			{},
			this.res,
			{ data: text }
		);
		
		return this;
	}

	json(json) {
		const headers = Object.assign(
			{},
			this.res.headers,
			{ 'Content-Type': 'application/json' }
		);

		this.res = Object.assign(
			{},
			this.res,
			{ data: JSON.stringify(json), headers }
		);

		return this;
	}

	status(status) {
		this.res = Object.assign(
			{},
			this.res,
			{ status }
		);

		return this;
	}

	build() {
		return this.res;
	}
}

module.exports = (res) => new Response(res);