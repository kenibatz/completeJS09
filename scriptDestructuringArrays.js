'use strict';
/* Destructuing Arrays */
console.log('Destructuring Arrays and Objects');

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

  desserts: [
    'matcha swiss roll',
    'sesame cookies',
    'japanese cheesecake',
    'castella cake',
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
  showSpecials: function (stylesIndex, dessertsIndex) {
    //return an array
    return [this.styles[stylesIndex], this.desserts[dessertsIndex]];
  },
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

// NESTED
console.log(`\n\n*** Array Destructuring with Nested Unpacking ***`);

const myNestedColors = ['yellow', 'pink', ['blue', 'green', 'red']];

const [color01, , [color02, , color03]] = myNestedColors;
console.log(color01, color02, color03);

// DEFAULT VALUES
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

// console.log(`\n\n*** Array Destructuring with Mutating Names ***`);

// const [newPlayer] = charactersMario;
// console.log(newPlayer);

//ARRAY DESTRUCTURING THE RESULT OF A METHOD
//recive 2 return values from a function
console.log(`\n\n*** Array Destructuring with Returned Array ***`);
// console.log(myResto.showSpecials(1, 1));
let specialStyle, specialDessert;
[specialStyle, specialDessert] = myResto.showSpecials(2, 3);
console.log(
  `Today's Special bundle includes: ${specialStyle} and ${specialDessert}`
);

// console.log(`Tomorrow's Special Bundle includes: [specialStyle, specialDessert] = myResto.showSpecials(0, 1)`);

//this is the way to get a simple output of the above result without using text literals. basically, enclosing the expression in parantheses
//this is a good example of an IIFE, Immediately Invoked Function Expression
console.log(([specialStyle, specialDessert] = myResto.showSpecials(0, 1)));
