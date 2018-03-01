const getLengthOfObject = (obj) => {
  // The program must take an object as an argument
  // and return the number of properties in it
  let count = 0;
  for (let y in obj) {
    count++;
  }
  return count;
}

console.log(getLengthOfObject({
  name: "John",
  last: "DOe",
  age: 21
}));

const addCoolProperty = (obj) => {
  // The program must take an object as an argument
  // add "cool" property to it
  // assign value 123 to "cool" property
  // return modified obj

  obj.coll = 123;
  return obj.coll;
}
console.log(addCoolProperty({}));

const arrayIntoObject = (arr) => {
  // The program must take an array of numbers as an argument
  // it should create an object with 2 properties (moreThan10, lessThan10)
  // moreThan10 is an array of values of "arr", which values are more than 10
  // lessThan10 is an array of values of "arr", which values are less than 10
  // return that object with 2 properties
  let obj = {};
  let moreThan10 = arr.filter(ff => ff > 10);
  let lessThan10 = arr.filter(dd => dd < 10);

  obj.moreThan10 = moreThan10;
  obj.lessThan10 = lessThan10;

  return obj;

}

console.log(arrayIntoObject([19, 145, 45, 1, 7, 128, 9, 2, 3, 10]));