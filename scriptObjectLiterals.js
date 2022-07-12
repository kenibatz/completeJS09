'use strict';
//Object Literals
// ES6 introduced 3 new ways to construct objects

console.log(`\n*** Add an existing object *** `);

const bentoStyles = [
  'kamameshi bento',
  'kyaraben',
  'makunouchi bento',
  'shokado bento',
  'wappameshi',
];

const myResto = {
  bentoStyles,
};

console.log(myResto);

console.log(`\n*** Writing functions *** `);
//we can omit the colon and function keyword when defining a function

const myResto2 = {
  orderBento(mainOrder, sideDish, drinks) {
    console.log(`you ordered ${mainOrder}, ${sideDish} and ${drinks}`);
  },
};

myResto2.orderBento('kyaraben', 'sesame cookies', 'rootbeer');

console.log(`\n*** Computed Properties *** `);
// the first nested object property of openingHours is derived from a separate object
// the second object shows that a value can be computed for the property
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri'];

const myResto3 = {
  openingHours: {
    [weekdays[0]]: { open: 11, close: 23 },
    [`sat and sun ${1 + 1}`]: { open: 11, close: 21 },
  },
};

console.log(myResto3.openingHours);
