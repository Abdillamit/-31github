// LeetCode

//2623. Memoize

type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  const cache: { [key: string]: number } = {};

  return function (...args: number[]): number {
    const key = args.join(",");

    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // Output: 5
console.log(memoizedFn(2, 3)); // Output: 5
console.log(callCount); // Output: 1
