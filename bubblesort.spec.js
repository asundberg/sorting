function numerically(a, b) {
	return a - b;
}

function generateArray(size, lower, upper) {
	var randomArray = [];
	while(size--) {
		var randomNum = Math.floor(lower + Math.random() * upper);
		randomArray.push(randomNum);
	}
}

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one item', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  // it('handles an array with multiple items', function(){
  //   expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );
  // });

for(var i = 2; i < 103; i += 20) {
	it('sorts an array of ' + i + 'random items', function() {
		var arr = generateArray(i, 0, 100);
		var sorted = arr.slice(0).sort(numerically);
		expect( bubbleSort(arr) ).toEqual(  );
	});
}

it('compares the expected number of times', function() {
	spyOn(window, 'inOrder')
});

});