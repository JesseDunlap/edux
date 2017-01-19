const edux = require('../index');
const file = require('edux-file');

edux(route => ([
	file('examples/edux.png')
])).listen(3000);