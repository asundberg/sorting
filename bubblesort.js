function bubbleSort(array) { // O(n*n) or O(n^2)
    var sorted = false; // O(1)
    // loop over each item in the array & keep doing the inner loop until it's sorted
    for(var end = array.length; end > 0 && !sorted; end--) { // passes // O(n*n1)
        sorted = true; // assume until proven incorrect
        // go down and swap things
        for(var j = 0; j < array.length; j++) { // bubbling // O(n*1)
            if(!inOrder(array, j)) { // O(1)
                swap(array, j); // O(?)
                sorted = false; // O(1)
            }
        }
    }
    return array; // O(1)
}

// making this global because we will put a spy function in our test specs, because we need to keep track of number of comparisons, so this makes it easier to spy.
function inOrder(array, index) { // O(?)
    if(index === array.length - 1) {
        return true; // O(1)
    }
    return array[index] < array[index + 1]; // O(1)
}

function swap(array, index) { // side effects - no need to create a copy of the array; instead we are manipulating the array. // O(1)
    var oldLeftValue = array[index]; // O(1)
    array[index] = array[index + 1]; // O(1)
    array[index + 1] = oldLeftValue; // O(1)
}

// [1, 2, 3, 4, ..........]
// [3, 1, 9, 23, 24, 90, 0]
