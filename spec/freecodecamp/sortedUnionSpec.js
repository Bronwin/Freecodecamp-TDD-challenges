describe('Sorted Union', () => {
	const sortedUnion = require('../../js/freecodecamp/sortedUnion');

	it('should return [1, 3, 2, 5, 4]', () => {
		const result = sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]);
		expect(result).toEqual([1, 3, 2, 5, 4]);
	})

	it('should return [1, 3, 2, [5], [4]]', () => {
		const result = sortedUnion([1, 3, 2], [1, [5]], [2, [4]]);
		expect(result).toEqual([1, 3, 2, [5], [4]]);
	})

	it('should return [1, 2, 3, 5]', () => {
		const result = sortedUnion([1, 2, 3], [5, 2, 1]);
		expect(result).toEqual([1, 2, 3, 5]);
	})

	it('should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
		const result = sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
		expect(result).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);
	})
});
