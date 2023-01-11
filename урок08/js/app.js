// const output = document.getElementById("output");

// const height = 15;
// const star = "*";

// for (let i = 0; i < height; i++) {
// 	for (let j = 0; j < i; j++) {
// 		output.innerHTML += "*";
// 	}
// 	output.innerHTML += "<br>";
// }

// let a = 2;

// function foo() {
// 	console.log("hello Андрей");
// 	console.log("hello Козел");
// 	console.log("hello Онейни ами");
// 	console.log("hello харомми Сергей");
// 	let a = 3;
// 	console.log(a);
// }

// foo();

// function sum(a, b) {
// 	console.log(a + b);
// }

// sum(2, 5);
// sum(5, 8);

// function squarePerimetr(a) {
// 	console.log(a * 4);
// }

// squarePerimetr(2);

// const PI = Math.PI;

// console.log(Math.sin(Math.PI / 6));

// Ваша игра: Викинги
// Создать функцию, которая вычисляет вам
// сколько детей убили викинги за n лет
// Если, в месяц они уничтажают 3 деревни
// C условием того, что они убивают детей, где в деревне проживает менее 50 человек
// Генериция колличества людей в деревне будет происходить рандомно, от 15-80
// Колличество детей в деревне всегда 20%, нужно округлять число
// в случае десятичного значение

// function sum(a, b) {
// 	console.log(a + b);
// 	return 5
// }

// console.log(sum(5, 8));

// let result = sum(5, 8);
// console.log(result);
// result = sum(5, 7);
// console.log(result);

// function welcomin(name = "user") {
// 	return " " + name;
// }
// const result = welcomin();
// console.log(result);

// function ageControl(age) {
// 	// if (age >= 18) return "Come in";
// 	// return "Не нада болам";
// 	let i = 0;
// 	while (i < 10) {
// 		i++;
// 		if (i === 9) return i;
// 	}
// }

// console.log(ageControl(12));




// const a = {
//     name: "jora",
//     age: 14,
// }

// const key = "age"
// console.log(a[key])

// const a = 3;
// const b=5;

// const a = { name: "jora", age: 14, } 
// const b = { name: "key", age: 10, }

// console.log(a + b);

// const a = {
//     a: 3,
//     b: 5,
// }


// const b = {
//     a: 2,
//     b: 6,
// }

// a.a += b.b

// console.log(a)

// const store = {
//     apple: 1500,
//     egg: 2000,
//     pineaple: 7000,
//     kampit: 6000,
// }
// for (let store = 0; store < agg; store++) {
//     console.log(store)
// }
// let user = {

//     name: "Alish",

//     age: 20,

// };

var div = document.getElementById("color");
var r = Math.floor(Math.random() * 256)

g = Math.floor(Math.random() * 256)

b = Math.floor(Math.random() * 256)
div.style.backgroundColor = "rgb("+r+","+g+","+b+")";
