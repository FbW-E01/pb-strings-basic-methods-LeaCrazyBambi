const messageOne = "I can walk in the park all day!";
console.log(messageOne.slice(18, 22));

// 2.
const messageHello = "Hello World!";
console.log(messageHello.toUpperCase());

//  3.
const toEarth = "Hello Earthling";
console.log(toEarth.toLowerCase());

//  4.
const weLearn = "JavaScript";
console.log(weLearn.slice(3, 6));

//  5.
const likeShoes = "nice shoes";
console.log(likeShoes.includes("l"));
console.log(likeShoes.includes("n"));

//  6.
const fruits = "Bananas";
const firstFruit = fruits.slice(0, 1);
console.log(firstFruit + fruits + firstFruit);

//  7.
const moreFruit = "Ananas";
const firstMoreFruit = moreFruit.slice(-3);
console.log(firstMoreFruit + moreFruit + firstMoreFruit);

//  8. 
const flower = "SpringFlower";
const firstFlower = flower[0];
const lastFlower = flower.slice(-1);
const middleFlower = flower.slice(1, 11);
console.log(lastFlower + middleFlower + firstFlower);

//  9.
const firstName = "Lea";
const city = "Frankfurt am Main";
const profession = "student";
console.log("My name is " + firstName + ". I am originally from " + city + " and I am a " + profession);

//  10. 
const lastExercise = "the quick brown fox";
const firstLetter = lastExercise[0];
const firstLetterTall = firstLetter.toUpperCase(1);
const restExercise = lastExercise.slice(1);
console.log(firstLetterTall + restExercise);