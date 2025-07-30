const marvel = ["thor", "Irom Man", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3]);

// const allHeroes = marvel.concat(dc)
// console.log(allHeroes);

const allNewHeroes = [...marvel, ...dc]

console.log(allNewHeroes);


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.isArray("Gagan"))
console.log(Array.from("Gagan"))
console.log(Array.from({name: "Gagan"})) // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
