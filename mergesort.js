'use strict'

function split(arr) { // [6, 3, 7, 11, 2]
	var result = []; // []
	var slicePoint = Math.floor(arr.length / 2);  
	var firstHalf = arr.slice(0, slicePoint); 
	var secondHalf = arr.slice(slicePoint); 
	result.push(firstHalf);
    result.push(secondHalf);
	return result; 
}

function merge(arr1, arr2) { // 
	var result = []; // 
	var j = 0;
	for(var i = 0; i < arr1.length; i++) { 
		for(; j < arr2.length; j++) { 
			if(arr1[i] > arr2[j]) {
				result.push(arr2[j]);
			} else {
				break;
			}
		}
		result.push(arr1[i]);
	}
	return result.concat(arr2.slice(j)); 
}

function mergeSort(arr) { // [6, 3, 7, 11, 2]
	if(arr.length <= 1) {
		return arr;
	} else {
		if(arr.length === 2) {
			return merge(split(arr)[0], split(arr)[1]);
		} else {
			var splitArr1 = split(arr)[0]; // [6, 3]
			var splitArr2 = split(arr)[1]; // [7, 11, 2]
			return [].concat(merge(mergeSort(merge(split(splitArr1)[0], split(splitArr1)[1])), mergeSort(merge(split(splitArr2)[0], split(splitArr2)[1]))));
		}
	}
}



