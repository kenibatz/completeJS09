'use strict';
console.log(`Looping over Objects`);
//objects are not iterables, so we can only loop through them indirectly using Object Keys, Values, and Entries
//unlike arrays and iterables, we need to use Object to fetch the keys, values or entries
//with iterables, it's enough to use a method like menu.entries()
//with objects we can't use openingHours.entries()
//instead we use Object.entries(openingHours)
//Object returns an array of keys, values, or both, depending on which method is used

const openingHours = {
  thursday: { open: 11, close: 23 },
  friday: { open: 11, close: 23 },
  saturday: { open: 11, close: 23 },
};

console.log(openingHours);

console.log(`\n*** Object.keys() ***`);
//Property Names are fetched through Object.keys()
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`\n*** Object.values() ***`);
//Property Values are fetched through Object.values()
const values = Object.values(openingHours);
console.log(values);

console.log(`\n*** Object.entries() ***`);
//both keys and values are fetched through Object.entries()
const entries = Object.entries(openingHours);
console.log(entries);

for (const [x, y] of entries) {
  console.log(`${x}: ${Object.entries(y)}`);
}

//remember that we can destruct objects as shown below with {open,close}
for (const [day, { open, close }] of entries) {
  console.log(`${day}: ${open} - ${close}`);
}
