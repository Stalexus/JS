//#### Task 1 🖥
const colors = ['red', 'green', 'blue'];
console.log(colors.length);
//#### Task 2 🖥
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length - 1]);
console.log(animals.pop());
//#### Task 3 🖥
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
numbers.splice(0, numbers.length);
console.log(numbers);
//#### Task 4 🖥
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);
//#### Task 5 🖥
const cats = ['Gachito', 'Tom', 'Batman'];
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
};
for (names of cats) {
    console.log(names)
}
//#### Task 6 🖥
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers, allNumbers.indexOf(8));
//#### Task 7 🖥
const binary = [0, 0, 0, 0];
console.log(binary.join('1'));