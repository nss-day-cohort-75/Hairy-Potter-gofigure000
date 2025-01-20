// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
const potteryItems = [];

let mug = makePottery("mug", 3, 5);
potteryItems.push(mug);

let platter = makePottery("platter", 6, 4);
potteryItems.push(platter);

let plate = makePottery("plate", 2, 6);
potteryItems.push(plate);

let jar = makePottery("jar", 8, 4);
potteryItems.push(jar);

let vase = makePottery("vase", 6, 9);
potteryItems.push(vase);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
