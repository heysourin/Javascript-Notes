// ! Assignment
// calcAverage=(sc1,sc2,sc3)=>{
//     return (sc1+sc2+sc3)/3;
// }

// const dolphineScore=calcAverage(85,54,41);
// const koalasScore=calcAverage(23,34,27);
// function checkWinner(dolphineScore,koalasScore){
//     if((dolphineScore*2)<=koalasScore){
//         console.log(`Koalas win, with ${koalasScore}`);
//     }else if((koalasScore*2)<=dolphineScore){
//         console.log(`Dolphins win, with ${dolphineScore}`);
//     }else{
//         console.log('No one wins');
//     }
// }

// checkWinner();

// ! Arrays
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher'];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

// ! Array Methods

// const frnds=['Sourin', "Max", "Denver"];
//*******Add elements******/
// console.log(frnds.push('Shelly'));//4, adds value and returns the length//? ************imp*********

// console.log(frnds.unshift('Nairobi'));//4

// ****** Remove Elements******
// console.log(frnds.pop());//Denver: prints the removed one

//! Fundamentals assignment 2

// function calcTips(bill){
//     let tip=bill>=50 && bill<=300 ? (bill*15)/100: (bill*20)/100;

//     return tip;
// }

//const bills =[125,555,44];
//const tips=[calcTips(125),calcTips(555),calcTips(44)];
// const totals =[(bills[0]+calcTips(125)),(bills[1]+calcTips(555)),(bills[2]+calcTips(44))]

// console.log(totals);

//! Introduction to Objects

// key values pair
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

//? *********Super imp***********
// const namekey='Name';
// console.log(jonas['first'+namekey]);//it is turning out be 'console.log(jonas['firstName']),these things impossible with Dot expression

// with Dot expression you have write final property name, not a computed one

//? *********Super imp***********

// const dataJonas=prompt('What do u want to about jonas?');

// console.log(jonas.dataJonas);// u see this is not possible
// console.log(jonas[dataJonas]);//but this one is possible

// giving it a structure of if-else statement

// if(jonas[dataJonas])//means if the asked data is defined(true),then print the data asking for
// {
//     console.log(jonas[dataJonas]);
// }else{
//     console.log('Sorry! Data not available')
// }

//? Exercise: ***************imp************
//? qstn:// "Jonas has 3 friends, and his best friend is called Michael"
//?  soln:
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//! Object Methods ***********very imp*********
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYeah: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     //? notice the way of writing function inside objexts
//     // calcAge: function (birthYeah) {
//     //   return 2037 - birthYeah;
//     // }
//     // calcAge: function () {
//     // console.log(this);
//     //   return 2037 - this.birthYeah;
//     // }
// calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     //? Now 'age' is also a preoperty of 'jonas' object
//     return this.age;
//     },
// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// ? Calling a function of objects, outside an object

// console.log(jonas.calcAge(1998));
// console.log(jonas.age);//'age' key created inside a function
// console.log(jonas.getSummary());// calling getSummary() function from inside of the object

// ! Coding challange 3

// const Mark={
//     fullName:"Mark Milller",
//     mass:78,
//     height:1.69,
//     caclBMI:  function(){
//         const BMI=(this.mass/(this.height*this.height));
//         return BMI;
//     }
// };
// const John={
//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     caclBMI:  function(){
//         const BMI=(this.mass/(this.height*this.height));
//         return BMI;
//     }
// };

// const result= (Mark.caclBMI()>John.caclBMI())?`Mark's BMI (${Mark.caclBMI()}) is higher that John's (${John.caclBMI()})!`:`Johns's BMI (${John.caclBMI()}) is higher that Mark's (${Mark.caclBMI()})!`;

// console.log(result)

//! For Loop
// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i=0;i<=jonas.length;i++){
//     console.log(jonas[i]+' is of '+ typeof jonas[i]+' type');
// }

// //? Assigning an array with for loop *********very imp*********
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i=0; i<years.length;i++){
//     ages.push(2037-years[i]);
// }

// console.log(ages);

//! Continue & Break Statement *********imp********

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

//? when you want to print strings only
// for (let i=0;i<=jonas.length;i++){
//     if(typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof(jonas[i]));
// }

//?  another way of doing the above thing ************doubt**********
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// ! Looping Backwards

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for(i=jonas.length-1;i>0;i--){
//     console.log(jonas[i]);
// }

//! While Loops
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
// console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// ? ************imp******   ****** doubt**********
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) //*means loop will run untill its a 7
// {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

//? Must know the difference between while loop and for loop

//! Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// for (i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// // console.log(totals);

// //? ***********Very imp*************
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
