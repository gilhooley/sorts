var insertionSort = function(array) {
  var idx, current;
  for(var i = 1; i < array.length; i++) {
    idx = i; 
    current = array[i];
    while(idx && current < array[idx-1]) {
      array[idx] = array[idx-1];
      idx--;
    }
    array[idx] = current;
  }
  return array;
};
