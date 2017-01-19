const http = require('http');
const flatten = require('lodash/flatten');

const dispatch = require('./lib/dispatch');
const buildRequest = require('./lib/reducers/pre/buildRequest');
const sendResponse = require('./lib/reducers/post/sendResponse');

const edux = (
	router,
	pre = [],
	post = []
) => {
	const server = http.createServer();

	server.on('request', (req, res) => {
		const _req = { _req: req };
		const _res = { _res: res };

		const preReducers = [
			buildRequest,
			...pre
		];

		const postReducers = [
			...post,
			sendResponse,
		];

		const reducers = [
			...preReducers,
			...flatten([router(req)]),
			...postReducers
		];

		dispatch(reducers, _req, _res);
	});

	return server;
};

edux.req = require('./lib/helpers/request');
edux.res = require('./lib/helpers/response');

module.exports = edux;