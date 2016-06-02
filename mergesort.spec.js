describe('Split Array function', function() {
	it('is able to split an array into two halves', function() {
		expect(split([1, 2])).toEqual([[1], [2]]);
	});

	it('handles empty arrays', function() {
		expect(split([])).toEqual([[], []]);
	});

	it('handles arrays with one item', function() {
		expect(split([1])).toEqual([[], [1]]);
	});

	it('handles arrays with an odd number of items', function() {
		expect(split([1, 3, 5])).toEqual([[1], [3, 5]]);
	});	

	it('handles arrays with an even number of items', function() {
		expect(split([1, 3, 5, 7])).toEqual([[1, 3], [5, 7]]);
	});	
});

describe('Merge', function() {
	it('is able to merge two sorted arrays into one sorted array', function() {
		expect(merge([1], [2])).toEqual([1, 2]);
		expect(merge([1, 2, 7], [4, 5])).toEqual([1, 2, 4, 5, 7]);
		expect(merge([6, 8, 9], [1, 2, 7, 11])).toEqual([1, 2, 6, 7, 8, 9, 11]);
	});
});

describe('Merge Sort', function() {
	it('is able to sort a non-ordered array', function() {
		expect(mergeSort([2, 1])).toEqual([1, 2]);
		expect(mergeSort([6, 3, 7, 11, 2])).toEqual([2, 3, 6, 7, 11]);
		expect(mergeSort([3, 6, 76, 1, 8, 20, 102, 9, 37, 2, 11, 88, 4])).toEqual([1, 2, 3, 4, 6, 8, 9, 11, 20, 37, 76, 88, 102]);
	});
});



