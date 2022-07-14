'use strict';
//Maps
//maps and objects have overlaps, they were both introduced in ES6
//map keys can be any type, object keys can only be strings

console.log(`\n*** Maps ***`);

console.log(`\n*** maps can be made with the set method`);
const mapMario = new Map();
mapMario.set('name', 'mario');

console.log(mapMario);

console.log(`\n*** map setting can be chained`);

mapMario
  .set('age', 41)
  .set('birthday', 'May 27, 1965')
  .set('height', '155cm')
  .set(true, 'okeydokey!')
  .set(false, 'oh no!')
  .set('appearances', [
    ['Donkey Kong', 1985],
    ['Mario Brothers', 1986],
    ['Super Mario Brothers', 1985],
  ]);

console.log(mapMario);

console.log(`\n*** use 'get' to get map values`);
console.log(mapMario.get('birthday'));

console.log(`\n*** boolean keys can be evaluated`);
console.log(mapMario.get(true));
console.log(mapMario.get(1 === 1));
console.log(mapMario.get(1 === 2));

// console.log(...mapMario.get('appearances'));
console.log(`\n*** keys can be checked if they exist`);
console.log(mapMario.has('age'));
console.log(mapMario.has('zodiac sign'));

console.log(`\n*** keys can be removed`);
console.log(mapMario.has('height'));
mapMario.delete('height');
console.log(mapMario.has('height'));

console.log(`\n*** size shows how many entries`);
console.log(mapMario.size);

console.log(`\n*** maps can be completely cleared`);
mapMario.clear();
console.log(mapMario);
console.log(mapMario.size);
