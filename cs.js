console.log("Hello World!");

// declare a variable called "numArr" which is an array containing the numbers 11, 17, 25, 29, 31, and 37. then print it to the console
var numArr = [11, 17, 25, 29, 31, 37];
// console.log(numArr);

// define a function "firstDigit" that takes a number and returns its first digit (passing 301 returns the number 3)
function firstDigit(num) {
  let str = String(num);
  if (str[0] === '-') {
    return str[1];
  }
  return str[0];
}
console.log(firstDigit(301));
console.log(firstDigit(-111));

// define a function "select" which takes two arguments, an array and a callback function. The callback function will accept one input and will return either true or false. "select" will iterate/loop through the array and pass each array element to the callback as an argument. If the callback returns true, the value used as input to the callback is pushed to a new array. If the callback returns false, the new array does not include that input. "select" will return this new array.

function select(arr, callback) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// use your "select" to construct an array consisting only of numbers from numArr whose first digit is 2.

console.log(select(numArr, function(el) {
  if (firstDigit(el) === '2') {
    return true;
  }
}));




// define a function "passAll" which takes two arguments, the first is any value and the second is an array of functions. These functions can be considered tests, as they will all return either true or false. "passAll" will iterate/loop through the array and pass the value to each function as an argument. If all functions (tests) return true, "passAll" will return true. If any of the functions return false, "passAll" will return false.

// function passAll(value, arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var func = arr[i];
//     if (!func(value)) {
//       return false;
//     }
//   }

//   return true;
// }

// function passAll(value, arr) {
//   var counter = arr.reduce((a, b) => if (b(value)) {
//     a++;

//   }
//  	return a;
//   );

//   return counter === arr.length;
// }

function passAll(value, arr) {
  var counter = arr.reduce(function(acc, func) {
    if (func(value)) {
      acc++;
    }
    return acc;
  }, 0)
  console.log(counter, 'asdf');
  return counter === arr.length;
}

// use your "passAll" to determine if the number 114 is positive, even, and has 1 as the first digit. Then test 113, 222 and -110.

var arrFuncs = [];

var isPositive = function(num) {
  return num > 0;
}

var isEven = function(num) {
  return num % 2 === 0;
}

var isFirst = function(num) {
  return firstDigit(num) === '1';
};

arrFuncs = [isPositive, isEven, isFirst];

console.log(passAll(110, arrFuncs));


// refactor "passAll" so that it uses the built-in "reduce" method instead of a "for" loop



// define a function "fastCache" that takes one argument, a function, and returns a function. When invoked, fastCache creates a cache that tracks calls to the returned function, where each input is associated with its output. Every subsequent call to that returned function with the same argument is returned directly from the cache instead of invoking the function again.
// function fastCache(func) {
//   let cache = {};
//   return function(z) {
//     if (cache[] === undefined) {
//       cache[z] = func(z);
//     } else {
//       return cache[z];
//     }
//   }
// }


function fastCache(func) {
  let cache = {}; // {firstDigit: 1}
  return function(x) {
    if (cache[x] === undefined) {
      cache[x] = func(x);
      return func(x);
    } else {
      return cache[x];
    }
  }
}

var addTwo = function(num) {
  return num + 2;
}


// var testCase1 = fastCache();
// console.log(testCase1(2))
