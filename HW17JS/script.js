//#### Task 1 💻
let getSum = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return getSum;
}
//#### Task 2 💻
let overpayment = (sum) => {
	let calc = sum * 5 * 0.17;
	return calc;
}
console.log(overpayment());
//#### Task 3 💻
 const trimString = (string, from , on) => {
     let shortString = string.slice(from, on);
     return shortString
 }
 console.log(trimString('Hello people', 0,5));
 //#### Task 4 💻
 let getSumNumbers = (number) => {
    let sumNum = 0;
    let sumArr = String(num).split('');
    for (i = 0; i < numbers.length; i++);
    sumNum += sumArr;
    return sumNum;
 }
 //#### Task 5 💻
 let getSum1 = (a, b) => {
    let sum1 = 0;
    for(i = 0; i > b; i++);
    sum1 += i;
    if (a === b);
    console.log(a || b, 'Since both are same')
    return;
 }
 //#### Task 6 💻
 const fooboo = (bool, foo, boo) => {
    if (bool === true) {
        console.log(foo);
    }else {
        console.log(boo);
    }
    const foo = () => {
        console.log(`foo`)
    }
    const boo = () => {
        console.log(`boo`)
    }
    return;
 }