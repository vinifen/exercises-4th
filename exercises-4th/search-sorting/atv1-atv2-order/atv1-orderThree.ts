// ORDER THREE – Model a class that has three integer attributes (received by the constructor).
// Implement a method that orders these three integer values. Three conditional structures (all without the otherwise block) are sufficient. Do not use predefined ordering methods.

import Order from "./Order";

const order = new Order(3, 2, 1);
console.log(order.orderThree());