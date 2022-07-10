'use strict';
/* Destructuing Arrays and Objects */
console.log('Destructuing Arrays and Objects');

const myResto = {
  name: 'Kyoto Bento',
  address: '',
  styles: [
    'kamameshi bento',
    'kyaraben',
    'makunouchi bento',
    'shokado bento',
    'wappameshi',
  ],

  openingHours: {
    monday: { open: 12, close: 23 },
    tuesday: { open: 12, close: 23 },
    wednesday: { open: 11, close: 23 },
    thursday: { open: 11, close: 23 },
    friday: { open: 10, close: 23 },
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },
};

// const myOrder = myResto.orderDelivery('sushi', 'teriyaki', 'tempura');

const bentoStyles = [
  'kamameshi bento',
  'kyaraben',
  'makunouchi bento',
  'shokado bento',
  'wappameshi',
];

let first, second, third, others;

console.log(`\n\n*** Array Destructuring with Skipping ***`);

[first, , third] = bentoStyles;
console.log(`The first and third bento styles are: ${first} and ${third}`);

console.log(`\n\n*** Array Destructuring with Swapping ***`);

let specialToday1, specialToday2;

[first, second, third] = bentoStyles;
[specialToday1, specialToday2] = [first, second];
console.log(`The specials yesterday were: ${first} and ${second}`);
[specialToday1, specialToday2] = [third, first];
console.log(`The specials today are: ${third} and ${first}.`);

console.log(`\n\n*** Array Destructuring with Spread ***`);

[first, second, ...others] = bentoStyles;
console.log(
  `The first and second bento styles are: ${first} and ${second}. \nThe other bento styles are: ${others}`
);

console.log(`\n\n*** Array Destructuring with Nested Unpacking ***`);

const myNestedColors = ['yellow', 'pink', ['blue', 'green', 'red']];

const [color01, , [color02, , color03]] = myNestedColors;
console.log(color01, color02, color03);

console.log(`\n\n*** Array Destructuring with Default Values ***`);

const charactersMario = ['Mario', 'Luigi'];
const [
  player1 = 'default1',
  player2 = 'default2',
  player3 = 'Peach',
  player4 = 'Toad',
  player5 = 'default5',
] = charactersMario;
console.log(
  `The characters in Super Mario 2 are: ${player1}, ${player2}, ${player3}, ${player4}, ${player5}`
);

console.log(`\n\n*** Array Destructuring with Mutating Names ***`);

const [newPlayer] = charactersMario;
console.log(newPlayer);
