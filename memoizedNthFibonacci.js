var nthFibonacci = function(n) {
  if(n < 3) return n === 0 ? 0 : 1;

  return nthFibonacci(n - 2) + nthFibonacci(n - 1);
};

var memoizedNthFibonacci = function(n, memo) {
  if(n < 3) return n === 0 ? 0 : 1;
  var memo = memo || [];

  if(!memo[n]) {
    memo[n] = memoizedNthFibonacci(n-1, memo) + memoizedNthFibonacci(n-2, memo);
  }

  return memo[n];
};

// tests
console.log('expect memoizedNthFibonacci(0) to equal 0, actual: ' + memoizedNthFibonacci(0));
console.log('expect memoizedNthFibonacci(1) to equal 1, actual: ' + memoizedNthFibonacci(1));
console.log('expect memoizedNthFibonacci(2) to equal 1, actual: ' + memoizedNthFibonacci(2));
console.log('expect memoizedNthFibonacci(3) to equal 2, actual: ' + memoizedNthFibonacci(3));
console.log('expect memoizedNthFibonacci(4) to equal 3, actual: ' + memoizedNthFibonacci(4));
console.log('expect memoizedNthFibonacci(5) to equal 5, actual: ' + memoizedNthFibonacci(5));
console.log('expect memoizedNthFibonacci(35) to equal 9227465, actual: ' + memoizedNthFibonacci(35));