/*
let js = 'amazing';
if (js === 'amazing') alert('Javascript is FUN');

40 + 8 - 3 + 20;
console.log(40 + 8 - 3 + 20);

console.log("Do Tien Dat");
console.log(17);

let firstName = "TIEN DAT";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let persion = "TIEN DAT";
let PI = 3.1415;

let myFirstJob = "Progamer";
let myCurrentJob = "Teacher";

let job1 = "progamer";
let job2 = "teacher";

console.log(myFirstJob);


// true;
// console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 17);
// console.log(typeof 'Tiến Đạt');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2003;
console.log(typeof year);

console.log(typeof null);


let age = 17;
age = 18;

const birthYear = 2003;
// birthYear = 2002;

// const job;

var job = 'progamer';
job = 'teacher';

lastName = 'Dat';
console.log(lastName);

// Math operators
const now = 2037;
const ageDat = now - 1991;
const ageSarah = now - 2020;
console.log(ageDat, ageSarah);

console.log(ageDat * 2, ageDat / 10, 2 ** 3);
// 2 ** 3 means 2 to the power 3 =2 * 2 * 2

const firstName = 'Tien';
const lastName = 'Dat';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageDat > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageDat = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDat + ageSarah) / 2;
console.log(ageDat, ageSarah, averageAge);
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:BMI = mass / height ** 2 = mass / (height * height).(mass in kg and height in meter).

1. Store Mark's and John's mass and height n variables
2. Calculated both their BMIs using the formular (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weight 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Mark weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.

GOOD LUCK
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn);
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string.....`);

console.log('String width \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('Sarah can start driving license🚗');
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is to young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log()