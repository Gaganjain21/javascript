const name = "Gagan"
const repoCount = 50
// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Gagan love muskan')

console.log(gameName[7]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(1,6)
console.log(newString);

const another = gameName.slice(0,7)
console.log(another);

const oneString = "    gagan    "
console.log(oneString);
console.log(oneString.trim());

const url = "www.gagan%20jain.com"

console.log(url.replace('%20', '-'));
 
console.log(url.includes("muskan"));

console.log(gameName.split(' '));




