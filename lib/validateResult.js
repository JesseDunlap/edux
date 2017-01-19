module.exports.validateUndefined = (newReq, newRes) => {
	if (typeof newReq === 'undefined') {
		throw new Error(
			'A reducer did not pass the request property when calling done. ' +
			'Check your calls to done() for undefined properties.'
		);
	}

	if (typeof newRes === 'undefined') {
		throw new Error(
			'A reducer did not pass the response property when calling done. ' +
			'Check your calls to done() for undefined properties.'
		);	
	}
};

module.exports.validateUnpreserved = (newReq, newRes) => {
	if (typeof newReq._req === 'undefined') {
		throw new Error(
			'The _req property was not preserved on the request object. ' +
			'This will cause issues with the built-in reducers. ' +
			'Did you forget to merge properties onto the request object?'
		);
	}

	if (typeof newRes._res === 'undefined') {
		throw new Error(
			'The _res property was not preserved on the response object. ' +
			'This will cause issues with the built-in reducers. ' +
			'Did you forget to merge properties onto the response object?'
		);
	}
};