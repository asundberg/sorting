function bubbleSort(array) {
    var tempItem;
    // loop over each item in the array
    for (i = 0; i < array.length; i++) {
        // check if current item is greater than next item
        if (array[i] > array[i + 1]) {
            // if it is, assign the next item to tempItem var
            tempItem = array[i + 1];
            // make the next item the current item, i.e. swap them
            array[i + 1] = array[i];
            // make current item the temp item
            array[i] = tempItem;
            // since we've swapped items, make i return two indices
            i = i - 2;
        }
    }
    return array;
}

console.log(bubbleSort([3, 1, 9, 23, 24, 90, 0]));
