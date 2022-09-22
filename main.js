var a = "navanee";
var a = 'navanee';
var x = "your my 'happiness'";
var x = 'your my "happiness""';

// string length
let text = "welcome to india";
console.log(text.length);

// slice
let xi = "navaneethakrishnan";
let y =xi.slice(3,7)
console.log(y);

// replace
let head = "navaneethakrishnan"
console.log(head.replace('navaneethakrishnan','naven'));

let ven ="the html file using the vscode";
let ban =ven.replace(/the/g,"this");
console.log(ban);

//to lowercase()
let lowercase='LOWERCASE'
console.log(`lowercase:`,lowercase.toLowerCase());

//to uppercase()
let uppercase='uppercase'
console.log(`uppercase:`,uppercase.toUpperCase());

//repeat
let repeat='"navanee",'
console.log(`Repeat:`,repeat.repeat(10));

//check string ends with
let endswith='sdsdsdsbbshdbsbd'
console.log(`EndsWith:`,endswith.endsWith('d'));

//includes
let includes='include'
console.log(`Includes:`,includes.includes('c'));

//concat
let user='welcome';
let user1=' ALL';
console.log(`Concat:`,user.concat(user1));

//indexOf
let users='Welcome'
console.log(`Index Of m:`,users.indexOf('m'));

//split
let fruits3='apple'
let fruits4=fruits3.split('')
console.log(`Split:`,fruits4);

//serach
let search='hello all'
console.log(`Search:`,search.search('a'));

// indexOfCharacter
let fruits='apple'
console.log('Index of character:',fruits.charAt(3))

