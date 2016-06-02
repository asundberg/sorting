'use strict'

function split(arr) { 
	var result = []; 
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

function mergeSort(arr) { 
	if(arr.length <= 1) {
		return arr;
	} else {
		var splitArr = split(arr); 
		return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
	}
}



