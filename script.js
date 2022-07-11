'use strict';
// Spread and Rest 2
console.log('Spread and Rest Operator 2');
// spread packs, rest unpacks

// SPREAD
console.log(`\n *** creating new arrays with Spread *** `);
const jamTypes = [
  'peanut butter',
  'strawberry',
  'orange marmalade',
  'chocolate',
];

console.log(jamTypes);

const jamTypeMore = ['cheese', 'red pepper', 'jalapeno', ...jamTypes];

console.log(jamTypeMore);
console.log(...jamTypeMore);

// join 2 arrays
const jamTypesExtra = ['cocoa', 'ube', 'banana'];
const jamTypeMore2 = [...jamTypeMore, ...jamTypesExtra];

console.log(...jamTypeMore2);

console.log(`\n *** iterables and spread *** `);
// spread works with iterables: strings, maps, sets
const jamBrand = 'Peanuts';
console.log(...jamBrand);

console.log(`\n *** functions and spread *** `);

function orderJam(jam01, jam02, jam03) {
  console.log(`you ordered ${jam01}, ${jam02},${jam03}`);
}

// const myJamOrder = [
//   prompt(`first jam?`),
//   prompt(`second jam?`),
//   prompt(`third jam?`),
// ];

// console.log(orderJam(...myJamOrder));

console.log(`\n *** objects and spread *** `);
// as of ES2018 spread works with objects, even if objects are not iterables

const jamBrand02 = {
  name: 'Red Hot Peppers',
  type: 'jalapeno',
  produced: 1990,
  company: 'Jams Unlimited',
};

const jamBrand03 = { ...jamBrand02 };
jamBrand03.name = 'Super Hot Peppers';
jamBrand03.produced = 2000;

console.log(jamBrand02);
console.log(jamBrand03);

console.log(`\n *** Rest *** `);
// Rest unpacks an array

const restosArr = [
  'Chapter One',
  'The Vintage Kitchen',
  'Restaurant SIX',
  '31 Lennox',
  'Eatokyo',
  'Fire Steakhouse',
];

//Rest takes the rest of the list and puts them in a new array
const [dublinResto01, dublinResto02, ...dublinRestoOthers] = restosArr;

console.log(dublinResto01, dublinResto02, dublinRestoOthers);

console.log(`\n *** Combining Rest and Spread *** `);
//combining Rest and Spread, plus skipping an item
//the Rest pattern must always be in the last in a destructuring assignment. consequently, there can only be one Rest pattern because it takes in the rest.
const [chapterOne, , restaurantSix, ...otherRestos] = [...restosArr];

console.log(`${chapterOne}, ${restaurantSix}`);
console.log(otherRestos);

console.log(`\n *** Rest and Objects *** `);
const openingHours = {
  wed: { open: 10, close: 23 },
  fri: { open: 11, close: 22 },
  saturday: { open: 10, close: 23 },
};

console.log(openingHours);

//We can get the weekdays by isolating the 'saturday' object and putting the rest in a new object
//the name of the variable must match the name of the object (unless you mutate it)

// const { saturday, ...weekdays } = { ...openingHours };

//mutated version below
const { saturday: sabado, ...weekdays } = { ...openingHours };

console.log(sabado, weekdays);

console.log(`\n *** Rest and Functions *** `);

const showDiscount = function (...discounts) {
  let totalDiscount = 0;
  let x = 0;

  for (x = 0; x < discounts.length; x++) totalDiscount += discounts[x];

  return totalDiscount;
};

console.log(showDiscount(5, 10, 15));
console.log(showDiscount(10, 25));
const discountArr = [20, 25, 30];
console.log(showDiscount(...discountArr));
