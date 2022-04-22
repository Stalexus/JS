//#### Task 1 💻
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e = null;
console.log(typeof (a), typeof (b), typeof (c), typeof (d), typeof (e));
//#### Task 2 💻
let height = 15
let width = 20
if (width > height) {
    console.log(width);
} else {
    console.log(height);
}
//#### Task 3 💻
for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//#### Task 4 💻
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork = key && documents && pen && (apple || orange);
//#### Task 5 💻
let num = +prompt('Введите число!');
if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizBuz');
} else if (num % 3 === 0) {
    console.log('Buz');
} else if (num % 5 === 0) {
    console.log('Fiz');
}
//#### Task 6 💻
let userAge = +prompt('Сколько Вам лет?');
if (userAge > 18) {
    alert(`Попей пивка`);
} else if (userAge < 16) {
    alert(`Пей колу`);
} else {
    alert(`Можешь выкурить сигаретку, только маме не говори`);
}
//#### Task 7 💻
let sideOfTheWorld = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (sideOfTheWorld) {
    case `юг`:
        console.log('на юг пойдешь счастье найдешь');
        break;
    case `север`:
        console.log('на север пойдешь много денег найдешь');
        break;
    case `запад`:
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case `восток`:
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default :
        alert('сторона света не найдена')
}
