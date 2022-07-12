'use strict';
// Looping Arrays, the for-of loop

const bentoStyles = [
  'kamameshi bento',
  'kyaraben',
  'makunouchi bento',
  'shokado bento',
  'wappameshi',
];

console.log(`\n*** Using for-of loop ***`);
for (const item of bentoStyles) console.log(item);

// destructuring bentostyles
// from entries, we can see that each item is an array that contains the index number and the name of the bento style
console.log([...bentoStyles.entries()]);

//we add '+1' below to make the index 1-based instead of 0-based
console.log(`\n*** Using for-of loop 2 ***`);
for (const item of bentoStyles.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

//because we know 'item' is an array, we can use destructuring an improved code style
console.log(`\n*** Using for-of loop 3 ***`);
for (const [bentoIndex, bentoStyle] of bentoStyles.entries()) {
  console.log(`${bentoIndex + 1}: ${bentoStyle}`);
}
