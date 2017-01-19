const expect = require('chai').expect;

describe('validateResult', () => {
	describe('validateUndefined', () => {
		it('should throw an error if req is undefined', () => {
			const validateResult = require('../../lib/validateResult');
			const validateUndefined = validateResult.validateUndefined;

			expect(
				() => validateUndefined(undefined)
			).to.throw(Error);
		});

		it('should throw an error if res is undefined', () => {
			const validateResult = require('../../lib/validateResult');
			const validateUndefined = validateResult.validateUndefined;

			expect(
				() => validateUndefined({}, undefined)
			).to.throw(Error);
		});
	});

	describe('validateUnpreserved', () => {
		it('should throw an error if req._req is undefined', () => {
			const validateResult = require('../../lib/validateResult');
			const validateUnpreserved = validateResult.validateUnpreserved;

			expect(
				() => validateUnpreserved({}, {})
			).to.throw(Error);
		});

		it('should throw an error if res._res is undefined', () => {
			const validateResult = require('../../lib/validateResult');
			const validateUnpreserved = validateResult.validateUnpreserved;

			expect(
				() => validateUnpreserved({ _req: {} }, {})
			).to.throw(Error);
		});
	});
});