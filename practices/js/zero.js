
// let fruits = ['apple', 'grappes', 'banana', 'orange', 'pineapple'];
// console.log(fruits.length);
// for (let i = 0; i < fruits.length; i++){
// 	console.log(fruits[i]);
// }

// let add = fruits.push('mangot');
// console.log(fruits.length);
// let del = fruits.pop('orange');
// console.log(fruits.length);

// fruits.forEach(function(item, index, array) {
// 	console.log(item, index);
// });

// // *************** Array of String ************************** 
 

// let person = ['jean: 45', 'marcel: 43', 'maxime: 30', 'thibaut: 27'];
// for (let i = 0; i < person.length; i++) {
// 	console.log(person[i]);
// }
// console.log(person.length);

// person.forEach(function(item, index, array){
// 	console.log(item, index);
// });

// // ************ array class *********

// let team = ['Liverpool', 'Manchester City', 'Chelsea', 'Real Madrid', 'Max Fc', 'Swansea', 'Aston Villa', 'Barcelone Fc'];
// team.sort();
// console.log(team.length);
// for (let i = 0; i < team.length; i++) {
// 	console.log(team[i]);
// }

// // ******************* Array of Objects *********************

// let number = [{x:2, y:3, r:5, z:7}, {x:100, y:56, r:78}];
// function compare(a, b) {
// 	return a.y - b.y, a.x - b.x, a.r - b.r;	
// }
// console.log(number);
// number.sort(compare);
// console.log(number);
// number.forEach(function(item, index, array){
// 	console.log(item, array);
// });

// // ************** using the sort en forEach **************

// let items = [5,3,7,6,2,9];
// console.log(items.sort());



// number.forEach(function(item, index, array){
// 	console.log(item, array);
// });


// /* **** programm qui class les valeurs d'un array croissant ou decroissant***
// */

// let array1 = [2,10,7,3,9,44,1,5];
// console.log('before: ',array1.toString());
// for (let i = 0; i < array1.length; i++) {
// 	for(let j = 0; j<array1.length-i+1; j++) {
// 	if (array1[j] > array1[j+1]) {
// 		[array1[j], array1[j+1]] = [array1[j+1], array1[j]]
// 	}
// 	}
// }
// console.log('after:',array1.toString());


// // fin******* end********

// class Rectangle {
// 	constructor(width, height) {
// 		this.width = width;
// 		this.height = height;
// 	}
// 	getPerimeter() {
// 		return(this.width + this.height)*2;
// 	}
// 	getArea(){
// 		return this.width * this.height;
// 	}
// }
// let rect1 = new Rectangle(5, 3);
// let rect2 = new Rectangle(15, 7);
// let rect3 = new Rectangle(60, 17);
// console.log(rect1);
// let area1 = rect1.getArea();
// let perim1 = rect1.getPerimeter();
// console.log('Area: ', +area1);
// console.log('Perim:', +perim1);

// // ************* exercises for w3resource in javascript ***************

// let is_array = function(input) {
// 	if (toString.call(input) === "[object Array]")
// 	return true;
// 	return false;
// };
// console.log(is_array('w3resource'));
// console.log(is_array([2, 1, 6, 8, 4]));

// function profile(_name, _school) {
// 	return _name + _school;
// }
// console.log(profile(2, 3));

// function array_Clone() {
// 	if (toString.call(array_Clone) === "[object Array, []*2]")
// 	return "[1, 2, 4, 0]";
// 	return "[1, 2, 4, 0]";
// }
// console.log(1,2,  )

// function _facto() {
// 	let k =1;
// 	let prompt();
// 	for(let i = 1; i <= prompt(); i++) {
// 		k = k * i;
// 	}
// }
// console.log(_facto(5));

// lettres capitalisees au debut de mot

// function LetterCapitalize(str) {
// 	return str.replace(/\b[a-z]/gi, function(char) { 
// 		return char.toUpperCase();
// 	   });
// }


// function LetterCapitalize(str) {
//  // split the string into an array
//  var words = str.split(" ");

//  // we split the word into two parts and then combine the parts 
//  // the first part is the first letter which we capitalize and the 
//  // second part is the rest of the string
//  for (var i = 0; i < words.length; i++) {
//    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1);
//  }

//  // return the array of words joined into a string
//  return words.join(" ");




// // ************ coderbyte challenges solutions ****************

// //  ************ 1* first reverse *************

// let stri = "hello world";

// function FirstReverse(str) {
// 	let strArray = str.split("");
// 	console.log(strArray);
// 	let strRev = strArray.reverse();
// 	console.log(strRev);
// 	let output = strRev.join("");
// 	return output;
	
// }
// console.log(FirstReverse(stri));

// // ************* 2* First factorial ***********

// function FirstFacto(num) {
// 	let num1 = 1;
// 	for(let i=1; i<=num; i++) {
// 		num1 = num1 * i;
// 	}
// 	return num1;
// }
// console.log(FirstFacto(5));

// // ***************** 3* Longest Word ************

// let str  = "fun&!! time banana";
// function LongestWord(sen) {
// 	let senArr = sen.match(/[a-z0-9]+/gi);
// 	let max = senArr[0];
// 	for (let i = 0; i < senArr.length; i++)
// 	{
// 		if (senArr[i].length > max.length) {
// 			max = senArr[i];
// 		}
		
// 	}
// 	return max;

// }
// console.log(LongestWord(str));

// // *********** 4* Time convert ****************


// function TimeConvert(num) {
// 	let hrs = Math.floor(num/60);
// 	let min = num - (hrs * 60);
// 	return hrs + ":" + min;
// }
// console.log(TimeConvert(945));

// // ***************** 5* Letter changes ****************

// function LetterChanges(str) {
// 	const Alphabet = [a-z];
// 	let Arr = [...str];
// 	let result = []; pattern = /[a-z]/gi;
// 	Arr.forEach(letter => {
// 		if(!pattern.test(letter)){
// 		result.push(letter)
// 		} else {
// 			let position = Alphabet.indexOf(letter,1);
// 			letter = Alphabet[position];
// 			vowel = /a|e|i|o|u/gi;
// 			letter = letter.replace(vowel,letter.toUpperCase);
// 			result.push(letter);
// 		}
		
// 	});
// 	return result.join('');
// }
// console.log(LetterChanges( ))

// let num1 = 1;
// function AnotherFacto(num) {
// 	for(let i=1; i<=num; i++){
// 		num1 = num1 * i;
// 	}
// 	return num1;
// }
// console.log(AnotherFacto(5));

// // ********************** * Letter changes * *****************

let stg = "hello*3";
LetChanges(stg);
function LetChanges(str) {
	let nArr = str.split("");
	console.log(nArr);
	let regex = /hello/gi;
	console.log(stg.replace(regex, "ifmmp"));
	
	}		
		
// //  **************** 
// console.log(/abc/.test('abcde'));
// console.log(/abc/.test('abxde'));

// // let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// // console.log(dateTime.test("30-01-2003 15:30"));
// // console.log(dateTime.test("30-jan-2003 15:30"));

// let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime.test("25-12-2035 13:45"));

// let match = /\d+/.exec("one two 100");
// console.log(match);
// console.log(match.index);

// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));

// // let currentDate = new date();
// // console.log(currentDate);

// console.log(new Date(2019, 10, 28).getTime());
// console.log(new Date(1574895600000));



// ****************** Callback function *******************

// **************** *1 *********************

// function salutation(name) {
// 	console.log('Bonjour ' + name)
// }
// function processUserInput(Callback) {
// 	let name = prompt('Entrez du Nom.')
// 	Callback(name);
// }
// processUserInput(salutation);

// ******************* 2* *******************

let requestSomeThing =(query, callback) =>{
	let completeResponse = 'Hey, ' +query;
	callback(completeResponse);
}
function showTheResponse(response) {
	setTimeout (
		() => console.log(response)
		, 5000);
}


requestSomeThing('Bring me a cup of water', showTheResponse);



// ************** Promise Function *****************

let isRainny = false;
let p1 = new Promise( (resolve, reject)=>{
	if (isRainny) {
		resolve('Bring your umbrella');
	} else{
		reject("Don't bring your umbrella");
	}
});
p1.then(
	(result) => console.log(result)
)
p1.catch(
	(result) => console.log(result)
)


// function loadStyle(src) {
// 	return new Promise( (resolve, reject)=>{
// 		let link = document.createElement('script');
// 		link.src = src;
// 		document.head.append(link);
// 		link.onload = () => resolve(link);
// 		link.onerror = () => reject( new Error("Encounter a problem loading"+src) );
// 	})
// }

// console.log("hello world");
// loadStyle("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM")	
	
	
		
	












































