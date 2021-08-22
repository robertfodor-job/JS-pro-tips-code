'use strict';

// console.log("Synchronous 1");

// setTimeout((a) => console.log("Timeout 2"), 2000);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("Synchornous 4");

/////////////////////////////////////////
// Destructuring

const turtle = {
  name: 'Bob 🐢',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10,
  diet: 'berries',
};

// Example of bad code 💩

// function feed(animal) {
//   return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
// }

// Example of good code -> destructuring to avoid repetition of animal✅
// Destructure in the argument of the function itself
// function feed({ name, meal, diet }) {
//   return `Feed ${name} ${meal} kilos of ${diet}`;
// }

// OR
function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}
console.log(feed(turtle));

//////////////////////////////////////////////
// Template literals

const horse = {
  name: 'Topher 🐴',
  size: 'large',
  skills: ['jousting', 'racing'],
  age: 7,
};

// Only good with template literalls ✅

const { name, size, skills } = horse;

let bio = `${name} is a ${size} skilled in ${skills.join(' & ')}`;

console.log(bio);

// Advanced Tag Example

function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);

////////////////////////////////////////
// Spread Syntax

const pikachu = { name: 'Pikachu 🐭' };
const stats = { hp: 40, attack: 60, defense: 45 };

pikachu['hp'] = stats.hp; // Bad code 💩 and we are mutating the original object, when we most likely want to create a new immutable object

// or, but sitll bad code 💩
// const lvl0 = Object.assign(pikachu, stats);
// const lvl1 = Object.assign(pikachu, { hp: 45 });
// console.table([lvl0, lvl1]);

// Good Code ✅
const lvl0 = { ...pikachu, ...stats };
const lvl1 = { ...pikachu, hp: 45 };

// Arrays with spread op. syntax
let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// Bad Code 💩
// pokemon.push("Bulbasaur");

// Good array code ✅
pokemon = [...pokemon, 'Bulbasaur', 'Metapod']; // for push or unshift

console.log(pokemon);

console.log('%c Game', 'color: orange; font-weight: bold');
console.table([pikachu, lvl0, lvl1]);
console.log({ pikachu });

///////////////////////////////////////
// Console. time
console.time('looper');

let i = 0;
while (i < 1000000) i++;

console.timeEnd('looper');

///////////////////////////////////////
// Stack Trace Logs
const deleteMe = () => console.trace('bye bye database 📅');

deleteMe();
deleteMe();
// we get where it was defined and called

///////////////////////////////////////
// LOOPS

const orders = [500, 30, 99, 15, 223];

// Bad loop code 💩
// let total = 0;
// const withTax = [];
// const highValue = [];

// for (i = 0; i < orders.length; i++) {
//   // Reduce
//   total += orders[i];

//   // Map
//   withTax.push(orders[i] * 1.1);

//   // Filter
//   if (orders[i] > 100) {
//     highValue.push(orders[i]);
//   }
// }

// Good loop code ✅

// Reduce
const total = orders.reduce((acc, cur) => acc + cur);

// Map
const withTax = orders.map(v => v * 1.1);

// Filter
const highValue = orders.filter(v => v > 100);
console.log(total, withTax, highValue);

///////////////////////////////////////
// Async - AWAIT

const random = () => {
  return Promise.resolve(Math.random());
};

// Bad promise code 💩
// const sumRandomAsyncNums = () => {
//   let first;
//   let second;
//   let third;

//   return random()
//     .then(v => {
//       first = v;
//       return random();
//     })
//     .then(v => {
//       second = v;
//       return random();
//     })
//     .then(v => {
//       third = v;
//       return first + second + third;
//     })
//     .then(v => {
//       console.log(v, first, second);
//     });
// };

const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result is ${first + second + third}`);
};

sumRandomAsyncNums();
