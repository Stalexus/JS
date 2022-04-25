//#### Task 1 🖥
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach(element => console.log(element));
fibonacci.forEach(function getFibonacci (el){
    console.log(el)
});
//#### Task 2 🖥
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const addInfo = users.map((index, item) => `member ${item + 1}: ${index}`);
console.log(addInfo);
const addInfo1 = users.map(function decorUser(index, item) {
    return `member ${item + 1}: ${index}`;
});
console.log(addInfo1);
//#### Task 3 🖥
const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter(element => element > 0);
console.log(positiveNumbers);
const positiveNumbers2 = numbers.filter(function positiveFilter(element){
    return element > 0;
});
console.log(positiveNumbers2);
//#### Task 4 🖥
const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonacci1 = fibonacci1.reduce(
  (Value1, Value2) => Value1 + Value2
);
console.log(sumFibonacci1);
const sumFibonacci1_1 = fibonacci.reduce(function sumFibo(Value1, Value2){
    return Value1 + Value2;
});
console.log(sumFibonacci1_1);
//#### Task 5 🖥
const numbers1 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumbers = numbers1.find(element => (element % 2) === 0);
console.log(evenNumbers);
const evenNumbers1 = numbers1.find(function positiveFilter(element){
    return (element % 2) === 0;
});
console.log(evenNumbers1);
