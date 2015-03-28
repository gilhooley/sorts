var bubbleSort = function(array) {
  Array.prototype.swap = function(a,b) {
    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
  };

  array.sorted = false;

  var bubble = function() {
    array.sorted = true;
    for(var i = 0; i < array.length; i++) {
      if(array[i+1] && (array[i] > array[i+1])) {
        array.swap(i, i+1);
        array.sorted = false;
      }
    }
    return array;
  };

  while(!array.sorted) {
    bubble(array);
  }
  
  return array;
};

