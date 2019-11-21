describe('Sum of All Primes', () => {
	const sumAllPrimes = require('../../js/freecodecamp/sumPrimes');

	it('should return a number', () => {
		const result = sumAllPrimes(10);
		expect(Number.isInteger(result)).toBeTruthy();
	});

	it('should return 17', () => {
		const result = sumAllPrimes(10);
		expect(result).toEqual(17);
	});

	it('should return 73156', () => {
		const result = sumAllPrimes(977);
		expect(result).toEqual(73156);
	});
});
