// LeetCode

// 2723. Add Two Promises

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  return Promise.all([promise1, promise2]).then(
    ([result1, result2]) => result1 + result2
  );
}

// Example usage:
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // Output: 4
