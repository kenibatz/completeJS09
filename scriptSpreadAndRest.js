'use strict';
/* using the Spread and Rest Operators */
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
  showOrder: function (firstOrder, secondOrder) {
    return `${this.styles[firstOrder]}, ${this.styles[secondOrder]}`;
  },
};

console.log(`my resto: ${myResto}`);

// REST
const [first, second, ...others] = myResto.styles;
console.log(first, second, others);

//SPREAD
const orderFood = myResto.showOrder(1, 0);
console.log(`My Order: ${orderFood}`);

const showOrderFoodSpread = function (order1, order2, order3) {
  return `Here is your order: ${order1}, ${order2}, and ${order3} `;
};

const orderFoodArr = ['teriyaki', 'tempura', 'gyozo'];
console.log(showOrderFoodSpread(...orderFoodArr));
