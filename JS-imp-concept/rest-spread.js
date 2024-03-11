// rest and spread operators (...args)

//spreas operator
function addNumbers(a, b) {
  return a + b;
}

let array = [1, 3, 6, 4];

console.log(addNumbers(...array)); // spread operator- takes a group and spread it to ultiple value

//rest operator
function addTwo(a, b, ...args) {
  // take any number of agguments
  console.log(args);
  const product = a * b;
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }

  //   console.log(typeof args);
  return [sum, product];
}

console.log(addTwo(2, 4, 3, 5, 5));
