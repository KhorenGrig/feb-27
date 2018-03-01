const findNumberGreaterThan10 = (arr) => {
  // The program must take an array of numbers as an argument
  // and return an array of numbers greater than or equal to 10.
  let newarray = arr.filter(ar => ar >= 10);
  return newarray;
}

console.log(findNumberGreaterThan10([1,12,14,10,74,5,6,24,7,333]));


const findNumberInArray = (arr, num) => {
  // The program must take an array of numbers and a number as arguments.
  // it should search for the inputed number in the array.
  // If found, return true 
  // If not found, return false
  let bool;
  for (let i = 0;i < arr.length;i++){
    if (arr[i] === num) {
      bool = true;
    } else {
      bool = false;
    }
  }
  return bool;
}

console.log( findNumberInArray([1,12,10,74,5,6,24],24));

const concatenateArrays = (arrA, arrB) => {
  // The program must take 2 arrays of numbers as arguments
  // The program should concatenate (append, add) 2 arrays to each other
  // and return a new concatenated array.

  for (let i = 0; i < arrB.length; i++) {
    arrA.push(arrB[i]);
  }

  return arrA;

  // OR

  let newarray = [];
  for (let i = 0; i < arrB.length; i++) {
    arrA.push(arrB[i]);
  }
  for (let j = 0; j < arrA.length; j++) {
    newarray.push(arrA[j]);
  } 
  return newarray;
}

console.log(concatenateArrays([1,2,3,4,5],[6,7,8,9,10]));

const sumValues = (arr) => {
  // The program must take array of numbers as an argument
  // and return the sum of all values
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumValues([1, 2, 3, 4, 5, 6]));

const findMaxAndMin = (arr) => {
  // The program must take an array of numbers as an argument
  // find maximum and minumum numbers in the array
  // return an object { max, min } where "max" is a maximum number
  // and "min" is a minimum number
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }

}

console.log(findMaxAndMin([42, 18, 6, 506,402, 3, 9]));

const reverseArray = (arr) => {
  // The program must take an array of numbers as an argument
  // and return the reverse of that array
  return arr.reverse();
}

console.log(reverseArray([42, 18, 6, 402, 506, 9, 3]));