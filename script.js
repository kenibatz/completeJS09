'use strict';
//Maps 02
// another way to define maps is through arrays
// the set method is better when dealing with dynamic info
// the array method is better for static info

console.log(`\n*** Maps ***`);

console.log(`\n*** maps can be made with the array method`);
const mapMario = new Map([
  ['name', 'Mario'],
  ['age', 41],
  ['birthday', 'May 27, 1965'],
  ['height', '155cm'],
  [
    'appearances',
    [
      ['Donkey Kong', 1985],
      ['Mario Brothers', 1986],
      ['Super Mario Brothers', 1985],
    ],
  ],
  ['question01', 'Which game was the first on the Switch?'],
  [(1, 'Super Mario Tennis')],
  [2, 'Super Mario Soccer'],
  [3, 'Super Mario All Stars'],
  ['correct', 3],
  [true, 'okey-dokey!'],
  [false, 'oh no!'],
]);

console.log(mapMario);

console.log(`\n*** Objects into Maps`);
console.log(
  `\nthe structure of the array method above is similar to object entries. \nwith this knowledge, we can convert an existing object into a map using Object.entries().`
);

const openingHours = {
  thursday: { open: 11, close: 23 },
  friday: { open: 11, close: 23 },
  saturday: { open: 11, close: 23 },
};

console.log(openingHours);

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(`\n*** Maps and For-loops`);
console.log(
  `\nbecause maps are iterable, we can easily use a for-loop on them. unlike objects, we don't need to to extract the info using Object.entries and we can use the map directly.`
);
for (const [key, value] of mapMario) {
  console.log(`${key} : ${value}`);
}

console.log(
  `\nfurthermore, we can use conditions on keys to show only the values we want. `
);
for (const [key, value] of mapMario) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}

console.log(`\nMario Quiz`);
const myAnswer = Number(prompt(mapMario.get('question01')));

//this is valid, but we can also use the code after this block
// console.log(
//   mapMario.get('correct') === myAnswer
//     ? mapMario.get(true)
//     : mapMario.get(false)
// );

console.log(mapMario.get(mapMario.get('correct') === myAnswer));

console.log(`\nMap to Array`);
console.log(`use destructuring to convert a map into an array`);

console.log([...mapMario]);
console.log([...mapMario.keys()]);
console.log([...mapMario.values()]);
