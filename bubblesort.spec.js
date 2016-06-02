describe('Bubble Sort', function() {
	it('handles an empty array', function() {
		expect(bubblesort([])).toEqual([]);
	});

	it('handles an array with one item', function() {
		expect(bubblesort([1])).toEqual([1]);
	});

	it('handles an array with two items', function() {
		expect(bubblesort([7, 2])).toEqual([2, 7]);
	});

	it('sorts an array with many items', function() {
		expect(bubblesort([10, 3, 8, 23])).toEqual([3, 8, 10, 23]);
	});

	it('sorts an array ', function() {
		expect(bubblesort([100, 2, 88, 4, 44, 9283])).toEqual([2, 4, 44, 88, 100, 9283]);
	});

});