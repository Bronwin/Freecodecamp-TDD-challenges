describe('Smallest Common Multiple', () => {
	const smallesCommonMultiple = require('../../js/freecodecamp/smallestCommonMultiple');

	it('should return -1', () => {
		const result = smallesCommonMultiple([1, 5, 0]);
		expect(result).toEqual(-1);
	});

	it('should return -1', () => {
		const result = smallesCommonMultiple([1]);
		expect(result).toEqual(-1);
	});

	it('should return a number', () => {
		const result = smallesCommonMultiple([1, 5]);
		expect(Number.isInteger(result)).toBeTruthy();
	});

	it('should return 60', () => {
		const result = smallesCommonMultiple([1, 5]);
		expect(result).toEqual(60);
	});

	it('should return 60', () => {
		const result = smallesCommonMultiple([5, 1]);
		expect(result).toEqual(60);
	});

	it('should return 2520', () => {
		const result = smallesCommonMultiple([2, 10]);
		expect(result).toEqual(2520);
	});

	it('should return 360360', () => {
		const result = smallesCommonMultiple([1, 13]);
		expect(result).toEqual(360360);
	});

	it('should return 360360', () => {
		const result = smallesCommonMultiple([23, 18]);
		expect(result).toEqual(6056820);
	});
});
