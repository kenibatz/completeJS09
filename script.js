'use strict';
//Strings

console.log(`\nStrings`);
const gameConsole = 'Nintendo Switch';
const gameCartridge = 'Animal Crossing';

console.log(`\n*** Strings can function like Arrays`);
console.log(gameCartridge[7]);
console.log(gameCartridge.indexOf('Crossing'));
console.log(gameCartridge.lastIndexOf('mal'));

console.log(`\n*** Length`);
console.log(gameCartridge.length);
console.log(`Welcome to Nintendo!`.length);

console.log(`\n*** Slice`);
console.log(gameConsole.slice(9));
console.log(gameConsole.slice(0, 8));
console.log(gameConsole.slice(0, gameConsole.indexOf(' ')));
console.log(gameConsole.slice(-3));

console.log(
  `\n*** JavaScript is smart. When a method is applied to a string, it automatically converts the string primitive to an object. This process is called "boxing". After the method is finished it converts the object back into a string.`
);

console.log(`\n*** lowercase, uppercase, trim and chaining`);

const loginEmail = ' holaSenorDev@gmail.com ';
console.log(`loginEmail: ${loginEmail}`);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(`normalizedEmail: ${normalizedEmail}`);

const loginName = 'sEnOrdEv';
const normalizedLoginName =
  loginName[0].toUpperCase() + loginName.slice(1).toLowerCase();
console.log(`\nloginName: ${loginName}`);
console.log(`\nnormalizedloginName: ${normalizedLoginName}`);

console.log(`\n*** Replace and RegEx`);
const toadQuote = 'This is Fortress 21. The princess is in another Fortress!';
console.log(
  `Toad: ${toadQuote.toLowerCase().replace('fortress', 'castle').toUpperCase()}`
);

// Regular Expressions use slashes and the global variable

console.log(`Toad2: ${toadQuote.toLowerCase().replace(/fortress/g, 'castle')}`);

console.log(`\n*** Booleans`);
//.includes, .startsWith, .endsWith
const areYouAMario = function (guy) {
  // console.log(guy.toLowerCase().includes('mario'));
  // console.log(guy.toLowerCase().endsWith('mario'));
  if (guy.toLowerCase().endsWith('mario')) {
    console.log(`okey-dokey! : ${guy}`);
  } else {
    console.log(`oh no! : ${guy}`);
  }
};

areYouAMario('Mario Mario');
areYouAMario('Donkey Kong');
areYouAMario('Luigi Mario');

console.log(
  `\n*** Split and Join. \nSplit creates an array and is incredibly useful with destructuring. \nJoin creates a string based on an array.`
);

const superMario3 = 'Super+Mario+3+is+superb!';
console.log(superMario3.split('+'));

const whoIsLuigi = 'Luigi Mario Plumber Adventurer Brother';
console.log(whoIsLuigi);
const [luigiFirstName, luigiLastName, ...luigiSummary] = whoIsLuigi.split(' ');

const luigiMister = [`Mr.`, luigiFirstName, luigiLastName.toUpperCase()].join(
  ' '
);

// console.log(`${luigiFirstName} ${luigiLastName} is a ${luigiSummary}`);
console.log(`${luigiMister} is a ${luigiSummary}`);

console.log(typeof luigiFirstName);
console.log(typeof luigiSummary);

const capitalizeName = function (person) {
  const nameOfPerson = person.split(' ');
  const nameUps = [];
  // console.log(nameOfPerson);
  for (const n of nameOfPerson) {
    // console.log(n[0].toUpperCase() + n.slice(1));
    nameUps.push(n[0].toUpperCase() + n.slice(1));
    // console.log(nameUps);
  }
  return nameUps.join(' ');
};

console.log(capitalizeName('princess peach of mushroom kingdom'));

//alt capitlizeName
const capitalizeName2 = function (person) {
  const nameOfPerson = person.split(' ');
  const nameUps = [];

  for (const n of nameOfPerson) {
    nameUps.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return nameUps.join(' ');
};

console.log(capitalizeName2('princess daisy of sarasaland'));

console.log(`\nPadding with padStart and padEnd`);

const pressStart = 'start';
//the first argument in padStart and padEnd is the total length of the output string.
//'start' is 5 characters long, so with a padStart argument of 8, 3 extra character spaces are allocated
//this creates '###start' which is 8 characters long
//since padEnd needs 11 characters, it allocates 3 extra characters to the previous string
console.log(pressStart.padStart(8, '#').padEnd(11, '#'));

//another example
console.log(pressStart.padStart(5, '#').padEnd(20, '#'));

const maskBirthdate = function (birthdate) {
  //convert the birthdate into a string
  const str = birthdate + '';
  const last4Digits = str.slice(-4);
  return last4Digits.padStart(str.length, '#');
};

console.log(maskBirthdate('05052055'));
const someNumber = 500005052055;
console.log(maskBirthdate(someNumber));

console.log(`\nRepeat`);

const pressContinue = 'press any button to continue...';

console.log(pressContinue.repeat(3));
