console.log("start from here!!!");

//function --> A block of code that fullfill the specific task.
// HOISTING -> it apply only function that mean call function upper or down with respect function body.
// run();
// function run(params) {
//     console.log("runnig!!!!");
// }

// Assigment function

//  let stand = function walk(params) {
//     console.log("walking!!!!")
// }
// stand(); // calling
// HOISTING Property doesnot work here!!!!


// Anonymous function ->> function are not required here

// let pp = function () {
//     console.log('pp');
// }
// pp();


// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));


// special argument wala fuction;  ->> return object
// function add(a, b) {
//     let total = 0;
//     for (let vale of arguments) {
//        total += vale;
//     }
//     return total;
// }
// console.log(add(10, 20, 2, 3, 5, 10));

// Rest operator --> return operator;
// function add(num , value,...args) {
//     console.log(args);
//     console.log(num);
//     console.log(value);
// }

// add(1, 2, 3, 4, 10, 20);

// getter and setter

// let person = {
//     fname: "John",
//     lname: "Cena",
    
//     get fullname() {
//         return `${person.fname}  ${person.lname}`
//     },
//     set fullname(val) {
//         let part = val.split(" ");
//         // part[0] = "shaikh";
//         // part[1] = "Majid";
//         this.fname = part[0];
//         this.lname = part[1];
//     }
// }

// person.fullname = 'Abdul Majid';
// console.log(person.fullname);

// person.val = "Majid";
// // console.log(person.val);

// Reducer ARRRAY

let Arr = [1, 2, 3, 4];

let totalsum = Arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalsum);
