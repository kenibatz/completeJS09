'use script';
// Destructuring Objects

console.log(`Destructuring Objects`);

const myResto = {
  name: 'Kyoto Bento',
  address: 'Kyoto, Japan',
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

  showSpecials: function (stylesIndex, dessertsIndex) {
    //return an array
    return [this.styles[stylesIndex], this.desserts[dessertsIndex]];
  },

  orderDelivery: function ({ styleIndex = 1, dessertIndex = 1, address }) {
    return `Style: ${this.styles[styleIndex]}, \nDessert: ${this.desserts[dessertIndex]}, \nAddress: ${address}`;
  },
};

/*DESTRUCTURING OBJECTS
uses the curly brackets
the name of the variable must be the same as the name of the object key
*/
console.log(`\n\n*** Object Destructuring  ***`);
const { name, address, styles } = myResto;
console.log(name, address, styles);

console.log(`\n\n*** Object Destructuring  with Custom Variable Names***`);

/* CUSTOM VARIABLE NAMES */
const {
  name: restoName,
  address: restoAddress,
  styles: restoMainMenu,
} = myResto;
console.log(
  `Visit ${restoName}, located at ${restoAddress}. The main menu: ${restoMainMenu}`
);

console.log(`\n\n*** Object Destructuring  with Custom Values ***`);
// the drinks variable is a blank array by default and will be an emptry array because it has no equivalent key in the myResto object.
// appetizers will be 'undefined' because there is no default value set and no equivalent key
const { drinks = [], appetizers, styles: menuStyles = [] } = myResto;

console.log(drinks, appetizers, menuStyles);

/* MUTATING VARIABLES */
console.log(`\n\n*** Object Destructuring  with Mutating Variables ***`);

let specialMain = 'kyaraben';
let specialDessert = 'sesame cookies';

console.log(
  `\nYesterday's specials include: ${specialMain}, ${specialDessert}`
);

const specialsToday = {
  specialMain: 'wappameshi',
  specialDessert: 'matcha swiss roll',
};

// use IIFE
({ specialMain, specialDessert } = specialsToday);

console.log(`Today's specials include: ${specialMain}, ${specialDessert}`);

/* NESTED OBJECTS */
console.log(`\n\n*** Object Destructuring with Nested Objects ***`);
/* this code block gets the friday object from the openingHours object */
console.log(`\nfriday object`);
const { friday } = myResto.openingHours;
// console.log(myResto.openingHours);
console.log(friday);

/* this code block gets the open and close values from the friday object nested in the  openingHours object. the variables are also renamed. */
console.log(`open & close values`);
const {
  friday: { open: fridayOpeningHours, close: fridayClosingHours },
} = myResto.openingHours;
console.log(
  `Fridays - Opens: ${fridayOpeningHours}, Closes: ${fridayClosingHours}`
);

/* FUNCTION PARAMS DESTRUCTURING */
console.log(`\n\n*** Object Destructuring with Function Params ***`);
/* instead of manually passing individual arguments to a function, we can instead pass an object and let the function destructure it.
the names of the arguments must match the parameters of the function.
default values can be added to the function parameters.
*/

/* this first code block uses an independent function */
// function orderDelivery(obj) {
//   return obj;
// }
/*
function orderDelivery({ styleIndex, address }) {
  return `Style: ${styleIndex}, Address: ${address}`;
}

const myOrder = orderDelivery({
  styleIndex: 0,
  address: 'somewhere street',
});
console.log(`My Order: ${myOrder}`);
*/

/* this second code block uses the myResto object */

const myOrder = myResto.orderDelivery({
  address: 'somewhere city',
  styleIndex: 2,
});

console.log(myOrder);
