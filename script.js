// Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);
// ES6
// const are not immutable
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/* ES5
function driversLicense5(passedTest) {
	if(passedTest) {
		console.log(firstName);
		var firstName = 'John';
		var yearOfBirth = 1990;
	}
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicense5(true);
// ES6
// let and const are only accessible inside their blocks
function driversLicense6(passedTest) {
	console.log(firstName);
	let firstName;
	const yearOfBirth = 1990;
	if(passedTest) {
		firstName = 'John';
	}
	console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicense6(true);
*/


/*Lecture: Blocks and IIFEs
//ES6
{
	//creates a block
	const a = 1;
	let b = 2;
	var c = 3;
}
//console.log(a + b)
console.log(c);
//ES5
(function() {
	var c = 3;
})();
//console.log(c);
//Lecture: Strings
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
	return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6 
//template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('Jn'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
*/
/***************************
 *Lecture: Arrow Functions
 */

/*
const years = [1990, 1965, 1982, 1937];
// ES5
var ages5 = years.map(function(el) {
	return 2016 - el;
});
console.log(ages5);
// ES6
//jus one argument and one line of code
let ages6 = years.map(el => 2016 - el);
console.log(ages6);
//more than one argument and one line of code
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
//more than one argument and more than one line of code
ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

/***********************
 * Lecture: Arrow Functions 2
 */

// ES5
/*
var box5 = {
	color: 'green',
	position: 1,
	//will not work correctly because the function is pointing to the window object
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
}
//box5.clickMe();
// ES6
const box6 = {
	color: 'green',
	position: 1,
	
	clickMe: function() {
		// arrow functions preserve the this keyword
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
//box6.clickMe();
/*const box66 = {
	color: 'green',
	position: 1,
	//will not work correctly because the function is pointing to the window object
	clickMe: () => {
		// arrow functions preserve the this keyword
		document.querySelector('.green').addEventListener('click', () => {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
}
box66.clickMe();*/

/*
function Person(name) {
	this.name = name;
}
// ES5
Person.prototype.myFriends5 = function(friends) {
// once again points to the window object
	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);
// ES6
Person.prototype.myFriends6 = function(friends) {

	var arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
}
new Person('Nelly').myFriends6(friends);
*/


/******************
 * Destructuring
 */
/*
// ES5 
var john = ['John', 26];
//var name = john[0];
//var age = john[1];
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);
const obj = {
	firstName: 'John',
	lastName: 'Smith'
}
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);
function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}
const[age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/
/***********************
 * Arrays
 */
/*
const boxes = document.querySelectorAll('.box');
// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
	cur.style.backgroundColor = 'dodgerblue';
});
// ES6
const boxesArr6 = Array.from(boxes); //transforms nodelist to Array
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
// ES5
/*
for(var i = 0; i < boxesArr5.length; ++i) {
	if(boxesArr5[i].className === 'box blue') {
		continue;
	}
	boxesArr5[i].textContent = 'I changed to blue!';
}
// ES6
for(const cur of boxesArr6) {
	if(cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changed to blue!';
}
// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
	return cur >= 18;
});
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);
// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
/**********************
 * Spread operator
 
function addFourAges (a, b ,c ,d) {
	return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

/*********************
 * Rest Parameters
 
// ES5
function isFullAge5() {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);
	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= 18);
	})
}
//isFullAge5(1990, 1999, 1965);
// ES6
function isFullAge6(...years) {
	years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965);
*/

// ES5

function isFullAge5(limit) {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments, 1);//excludes the first argument
	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= limit);
	})
}

//isFullAge5(16, 1990, 1999, 1965);


// ES6
function isFullAge6(limit, ...years) {
	years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965);


/**********************
 * Default Parameters
 */

// ES5
function SmithPerson(firstName,  yearOfBirth, lastName, nationality) {
	
	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'American' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}



var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


