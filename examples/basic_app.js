const edux = require('../index');

edux(route => ([
	(req, res, done) => (
		done(
			req,
			edux.res(res).text('Hello world!')
		)
	)
])).listen(3000);