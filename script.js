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

console.log(`\nlowercase, uppercase, trim and chaining`);

const loginEmail = ' holaSenorDev@gmail.com ';
console.log(`loginEmail: ${loginEmail}`);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(`normalizedEmail: ${normalizedEmail}`);

const loginName = 'sEnOrdEv';
const normalizedLoginName =
  loginName[0].toUpperCase() + loginName.slice(1).toLowerCase();
console.log(`\nloginName: ${loginName}`);
console.log(`\nnormalizedloginName: ${normalizedLoginName}`);
