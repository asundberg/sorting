'use strict';

function bubblesort(arr) { // [7, 2]
	var swaps = 0;
	for(var i = 0; i < arr.length - 1; i++) {
		var currentVal = arr[i];
		var nextVal = arr[i + 1]; 
		if(currentVal > nextVal) {
			swaps++;
			arr[i] = nextVal;
			arr[i + 1] = currentVal;
		}
	}
	if(swaps > 0) {
		return bubblesort(arr);
	}
	return arr;
}
