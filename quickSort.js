var concat = function (arr1, arr2, pivot) {
  return arr1.concat([pivot]).concat(arr2);
};

var quicksort = function(array) {
  var left = [], right = [], pivot;

  if(array.length <= 1) return array;

  pivot = array[0];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
  
  return concat(quicksort(left), quicksort(right), pivot);
};
