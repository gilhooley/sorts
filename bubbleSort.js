var bubbleSort = function(array) {
  Array.prototype.swap = function(a,b) {
    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
  };

  array.swapped = true;

  var bubble = function() {
    array.swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i+1] && (array[i] > array[i+1])) {
        array.swap(i, i+1);
        array.swapped = true;
      }
    }
    return array;
  };

  while(array.swapped) {
    bubble(array);
  }
  
  return array;
};

