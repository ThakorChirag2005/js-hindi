// const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
// const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

// // const all_heroes = marvel_heroes.concat(dc_heroes);

// // console.log(all_heroes);
// const all_new_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_new_heroes);
 let anotherArray = [1, 2, 3, [4, 5,6],7,8,[7,8,9,10]]

 const real_anotherArray = anotherArray.flat(Infinity);

console.log(real_anotherArray);
console.log(Array.isArray("chirag"));
console.log(Array.from("chirag"));
console.log(Array.from({length: 5}, (_, index) => index + 1));
console.log(Array.from({name: "chirag", age: 18, city: "khambhat"})); //instresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// const myScores = [score1, score2, 300, 400, 500];

// const [myScore1, myScore2, ...restScores] = myScores;

// console.log(myScore1);
// console.log(myScore2);
// console.log(restScores);