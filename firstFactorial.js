
// iterative
function iterativeFirstFactorial(num) { 
  var numCopy = num, res = 1;
  while(numCopy > 0) {
    res *= numCopy;
    numCopy--;
  }
  return res; 
} 

// recursive
function recursiveFirstFactorial(num) { 
  if(num < 0) return;
  if(num < 2) return 1;
  return num * FirstFactorial(num-1);
}

