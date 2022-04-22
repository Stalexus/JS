//#### Task 1 💻
const obj = {
    a : 1,
    b : 2,
};
delete obj.a;
delete obj.b;
console.log(obj);
//#### Task 2 🖥
let obj1 = {
    a : 1,
    b : 2,
};
console.log('a' in obj1);
console.log('b' in obj1);
//#### Task 3 🖥
const student = {
    name: 'John',
    age: 19,
    isHappy: true
};
for (key in student) {
    console.log(`Ключ ${key}`, `Значение ${student[key]}`)
}
//#### Task 4 🖥
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(colors['ru pum pu ru rum']['red']);
console.log(colors['ru pum pu ru rum']['blue']);
//#### Task 5 🖥
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    misha: 664,
    alexandra: 199
};
let sum = 0;
let human = 0;
for (humanName in salaries){
    sum += salaries[humanName];
    human ++;
}
let mean = sum / human;
console.log(mean);
//#### Task 6 🖥
const obj2 = {
    registrationLogin(){
        this.login = prompt('Введите логин', '');
    },
    registrationPassword(){
        this.password = prompt('Введите пароль', '');
    }
};
let authorization = () => {
    let login = prompt('Введите логин', '');
    let password = prompt('Введите пароль', '');
}
if (obj.login === login && obj.password === password) {
    console.log('Добро пожалоВать')
}
