const validateResult = require('./validateResult');

const dispatch = (reducers, req, res, done) => {
	const onDone = (newReq, newRes, newReducers = []) => {
		validateResult.validateUndefined(newReq, newRes);

		if (reducers.length === 0) return;

		const _newReq = (typeof newReq.build === 'function') ? newReq.build() : newReq;
		const _newRes = (typeof newRes.build === 'function') ? newRes.build() : newRes;
		const _reducers = [...newReducers, ...reducers];

		validateResult.validateUnpreserved(_newReq, _newRes);
		
		dispatch(_reducers, _newReq, _newRes, done);
	};

	const reducer = reducers.shift();	
	reducer(req, res, onDone);
};

module.exports = dispatch;