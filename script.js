'use strict';
//Nullish Operator and Optional Chaining
//both were introducted in ES2020 and work well together
//these are especially useful when receiving data from an API to check if they exist

console.log(`\n*** Nullish Operator ***`);
//Nullish operator checks only for undefined and null values. Zero and empty strings are accepted, even if they are falsey values.

const blankStr = '';
const numZero = 0;
let undefinedVar;
console.log('' ?? 'nada');
console.log(blankStr ?? 'nada');
console.log(0 ?? 'nada');
console.log(numZero ?? 'nada');
console.log(undefined ?? 'nada');
console.log(null ?? 'nada');
console.log(undefinedVar ?? 'nada');

console.log(`\n*** Optional Chaining ***`);
//Optional Chaining checks if the property before the '?.' operator exists. if it does not, 'undefined' is immediately returned.
//a property does not exist if it is null and undefined.
//0 and '' are considered existing.

const users = {
  user01: {
    userName: 'mario',
    userEmail: 'mario@nintendo.com',
  },
};

console.log(users.user01?.userName ?? '1 nada');

//nickname is undefined
console.log(users.user01?.userName?.nickname ?? '2 nada');

//abilities is undefined
console.log(users.user01?.abilities?.powers ?? '3 nada');

//user2 is undefined
console.log(users.user02?.userName ?? '4 nada');

console.log(`\n*** Optional Chaining and Methods ***`);
//Optional Chaining also works with Methods by adding the operator between the function and the arguments
const userPowers = {
  shootFireball(x) {
    return `${x} fireballs shot!`;
  },
};

console.log(userPowers.shootFireball?.(3) ?? 'no power!');
console.log(userPowers.shootLightning?.(3) ?? 'no such power!');

console.log(`\n*** Optional Chaining and Arrays ***`);
//OC can be used to check if an array is empty

let enemies = [];
enemies = [{ name: 'goomba', threat: 1 }];

console.log(enemies?.[0]?.name ?? 'no enemies');

//we can also test if an element in the array exists
console.log(enemies?.[1]?.name ?? 'no such enemy');
