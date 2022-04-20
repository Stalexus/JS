//Task 1 💻 Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
let x = 20; 
let y = 58;    
let z = 42;
console.log(x+y+z);
//#### Task 2 💻
const min = 60;
const hours = 60;
const day = 24;
const year = 365;
let myAge = 25;
let myAgeInSeconds = myAge * year * day * hours * min;
console.log(myAgeInSeconds);
//#### Task 3 💻
let count = 42;
count = String(count);
count = '42';
let userName = '42'; 
userName = Number(userName);
userName = +'42'; 
console.log(typeof count, typeof userName);
//#### Task 4 💻
let a = 1;   
let b = 2;   
let c = "белых медведей";
a = String(a);
b = String(b);
console.log(a + b + ' ' + c);
//#### Task 5 💻
let word_1 = 'доступ';
let word_2 = 'морпех';
let word_3 = 'наледь';
let word_4 = 'попрек';
let word_5 = 'рубило';
let lengthWords = (word_1.length + word_2.length + word_3.length + word_4.length + word_5.length);
//#### Task 6 💻
const num = 4;
console.log('Variable:', 'number', 'have type:', typeof num);
const str = 'Hello';
console.log('Variable:', 'string', 'have type:', typeof str);
const arr = [1,2,3];
console.log('Variable:', 'array', 'have type:', typeof arr);
//#### Task 7 💻
let personName = prompt('What is your name?', ['Misha']);
let personAge = prompt('How old are you?', [35]);
console.log(personName);
console.log(personAge);

//### ADVANCED level
//#### Task 1 👨‍🏫
let a_1 = 4;
let b_1 = 3;
a_1 = b_1 + a_1;
b_1 = a_1 - b_1;
a_1 = a_1 - b_1;
console.log(a_1, b_1);
//#### Task 2 👨‍🏫
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
codeWord1 = codeWord1.charAt(1);
codeWord2 = codeWord2.charAt(1);
codeWord3 = codeWord3.charAt(1);
codeWord4 = codeWord4.charAt(1);
codeWord5 = codeWord5.charAt(1);
let cipher = codeWord1 + codeWord2 + codeWord3 + codeWord4 + codeWord5