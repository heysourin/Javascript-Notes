
//! ***************** Assingnment 1****************
// BMIcalc=(mass,height)=>{
//     let BMI=mass/(height**2); 
//     console.log(BMI);
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// BMIcalc(massMark,heightMark);
// BMIcalc(massJohn,heightJohn);

//data 2:
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// BMIcalc(massMark2,heightMark2);
// BMIcalc(massJohn2,heightJohn2);

//**************** Assignment 2 with data 

//!!!!!!!!!!!!!!!!!!!!! String Literals
// console.log(`hello
// friends
// chai peelo`)

//! !!!!!!!!!!!!!!!!!!!!Truthy and Falsy values ************imp******
// let money=0;//*falsy value
// if (money){
//     console.log("Don't spend it all")
// }else{
//     console.log("Get a job!")
// }


// let height;//* falsy value
// if (height) {
// console.log ('YAY! Height is defined');
// }
// else {
// console.log (' Height is UNDEFINED')}

// let height1=0;//* consider as falsy value, its a bug*******
// if (height1) {
// console.log ('YAY! Height1 is defined');
// }
// else {
// console.log (' Height1 is UNDEFINED')}


//! Usage of logical operators ************imp*********

const hasGoodVision =true;
const hasDrivingLisence = true;
const isTired=true;

// console.log(hasDrivingLisence && hasGoodVision && !isTired);//*false, as '!isTired' is false

// if(hasDrivingLisence && hasGoodVision && !isTired){
//     console.log("Sarah can drive!");
// }else{
//     console.log("Sarah Can't drive");
// }
// if statement is turning out to be false, so else statement will execute



//! Switch Statement

// const day=prompt('Enter Day: ')
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//   } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
//   } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
//   } else if (day === 'friday') {
//     console.log('Record videos');
//   } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
//   } else {
//     console.log('Not a valid day!');
//   }

//! Ternary operator************ 

// let age=18;
// const jstc= age >= 18 ? "you Can Vote": "can't vote right now";
// console.log(`Age is ${age}, So ${jstc}`);

//! 
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
