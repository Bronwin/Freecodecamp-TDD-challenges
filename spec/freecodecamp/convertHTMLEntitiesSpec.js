describe('Convert HTML Entities', () => {
	const convertHTMLEntity = require('../../js/freecodecamp/convertHTMLEntities');

	it('should return Dolce &​amp; Gabbana', () => {
		const result = convertHTMLEntity('Dolce & Gabbana');
		const expectation = 'Dolce &amp; Gabbana';
		expect(result).toEqual(expectation);
	});

	it('should return Hamburgers &lt; Pizza &lt; Tacos', () => {
		const result = convertHTMLEntity('Hamburgers < Pizza < Tacos');
		const expectation = 'Hamburgers &lt; Pizza &lt; Tacos';
		expect(result).toEqual(expectation);
	});

	it('should return Sixty &gt; twelve', () => {
		const result = convertHTMLEntity('Sixty > twelve');
		const expectation = 'Sixty &gt; twelve';
		expect(result).toEqual(expectation);
	});

	it('should return Stuff in &quot;quotation marks&quot;', () => {
		const result = convertHTMLEntity('Stuff in "quotation marks"');
		const expectation = 'Stuff in &quot;quotation marks&quot;';
		expect(result).toEqual(expectation);
	});

	it('should return Schindler&apos;s List', () => {
		const result = convertHTMLEntity("Schindler's List");
		const expectation = 'Schindler&apos;s List';
		expect(result).toEqual(expectation);
	});

	it('should return &lt;&gt;', () => {
		const result = convertHTMLEntity('<>');
		const expectation = '&lt;&gt;';
		expect(result).toEqual(expectation);
	});

	it('should return abc', () => {
		const result = convertHTMLEntity('abc');
		const expectation = 'abc';
		expect(result).toEqual(expectation);
	});
});
