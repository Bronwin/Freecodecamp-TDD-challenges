describe('Sum All Odd Fibonacci NUmbers', () => {
	const sumAllOddFibonacci = require('../../js/freecodecamp/sumOddFibonacci');

	it('should return 1', () => {
		const result = sumAllOddFibonacci(1);
		expect(result).toEqual(1);
	});

	it('should return 1785', () => {
		const result = sumAllOddFibonacci(1000);
		expect(result).toEqual(1785);
	});

	it('should return 4613732', () => {
		const result = sumAllOddFibonacci(4000000);
		expect(result).toEqual(4613732);
	});

	it('should return 5', () => {
		const result = sumAllOddFibonacci(4);
		expect(result).toEqual(5);
	});

	it('should return 60696', () => {
		const result = sumAllOddFibonacci(75024);
		expect(result).toEqual(60696);
	});

	it('should return 135721', () => {
		const result = sumAllOddFibonacci(75025);
		expect(result).toEqual(135721);
	});
});
