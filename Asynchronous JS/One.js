//!Basic of asynchronous system: run it
// console.log("I ")
// console.log("eat ")

// setTimeout(() => {
//     console.log("Ice cream");
// }, 4000);

// console.log("with a ")
// console.log("spoon ")

//! Call backs in Javascript: ccalling one function inside another with parameters

// function one(callFunc){
//     console.log("step 1 conplete, call step 2")
//     callFunc();
// }

// function two(){
//     console.log("step 2")
// }

// one(two);

//! Call back hell:
// let stocks = {
//   Fruits: ["Strawberry", "grapes", "banana", "apple"],
//   Liquid: ["Water", "ice"],
//   Holder: ["Cone", "Cup", "Stick"],
//   Toppings: ["Chocolate", "Peanuts"],
// };

// let order = (fruitName, callProduction) => {
//   // console.log("order placed, call production");
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruitName]} is selected`);
//     callProduction(); //? function called inside settime out fucntion, if it is not called inside setTimeout it would have been printed first,
//   }, 2000);
// };

// //? We are gonna call production inside order function

// let production = () => {
//   // console.log("order received, starting production");
//   setTimeout(() => {
//     console.log(`Production has started.`);

//     setTimeout(() => {
//       console.log(`The fruit has been chopped`);

//       setTimeout(() => {
//         console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`);

//         setTimeout(() => {
//           console.log(`The machine has been started`);

//           setTimeout(() => {
//             console.log(`Icecream is placed on ${stocks.Holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.Toppings[0]} toppings added`);

//               setTimeout(() => {
//                 console.log(`Serve Icecream`);
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order("0", production);

//! Promises: sometimes call back hells can be very confusing, where promise comes into the scene

//                         Rejected -----→ .catch----------------------
//A promise                   ↑                                       ↓
//is    ----------→ Pending----                                   .finally
//made                        ↓                                       ↑
//                          Resolve -----→ .then -----→ .then----------

// let stocks = {
//   Fruits: ["Strawberry", "grapes", "banana", "apple"],
//   Liquid: ["Water", "ice"],
//   Holder: ["Cone", "Cup", "Stick"],
//   Toppings: ["Chocolate", "Peanuts"],
// };

// let isShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log(`Shop closed`));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//     .then(() => {
//     return order(0500, () => console.log("production has started"));
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)
//     );
//   })

//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.Holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.Toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })

//   .catch(()=>{
//     console.log("Customer left");
//   })

//   .finally(()=>{
//     console.log(`Day ended, shop is closed`);
//   })


