//*property define,, no real classes in js, so we do it in the form of objects

// let person1 = {
//     firstName: 'Proffessor',
//     lastName: 'sergio',
//     'last Name2': 'sergio2',
//     age: 45
// };

//calling properties

//calling by '.' notation
// console.log(person1.age);
// console.log(person1['last Name2']);

//modifying
// person1.age=46;
// console.log(person1.age);



//! Methods

// let person = {
//     firstName: 'Proffessor',
//     lastName: 'Sergio',
//     'last Name2': 'sergio2',
//     age: 45,

//     fullName: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// };

// person.fullName();

//! adding properties later

// ? process1
// let person = {};

// person.name = "Sargio Marquina"
// console.log(person2.name)

// person.sayHi = function(){
//     console.log('Hi');
// }
// person.sayHi();

// ? process2
// let person3 = new Object;




// let person1 = {
//     firstName: 'Proffessor',
//     lastName: 'sergio',
//     'last Name2': 'sergio2',
//     age: 45
// };

// let person2 = {
//     firstName: 'Proffessor',
//     lastName: 'sergio',
//     'last Name2': 'sergio2',
//     age: 45
// };

//DRY
// there were no concept of class till ES5, back then there used to be constructors, wwhich is almost like 'class' but not exactly class

//! constructor function of ES5 is classs of ES6

//? function inside constructor is known as 'Methods'
// function Person(first, last, a){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = a;

//     this.SayHi = function(){
//         console.log('Hi');
//     }

//     this.updtAge = function(newAge){
//         this.age = newAge;
//     }
// }

// let person1 = new Person("Berlin", "Tokyo", 21);


// let person2 = new Person("Rio", "Oslo", 29);
// person2.updtAge(88)
// console.log(person1)
// console.log(person2)
