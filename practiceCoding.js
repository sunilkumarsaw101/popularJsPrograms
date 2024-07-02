// function add(x,y,z){
//     return x+y+z;

// }

// console.log(add(3,5,2));

//curried function
// function curriedAdd(x){
//     return function(y){
//         return function(z){
//             return x+y+z;
//         }
//     }
// }
// console.log(curriedAdd(3)(5)(2));


// function* countGenerator() {
//     let count = 0;
//     while (true) {
//       yield count; // Pauses execution and yields the current value of count
//       count++;
//     }
//   }
  
//   // Create an instance of the generator
//   const counter = countGenerator();
  
//   // Using the generator to generate numbers
//   console.log(counter.next().value); // Output: 0
//   console.log(counter.next().value); // Output: 1
//   console.log(counter.next().value); // Output: 2
//   console.log(counter.next().value); // Output: 3
//   // and so on...
  

//use of constructor function.

// function person(name, age){
//     this.name= name,
//     this.age= age;

//    this.sayHelo= function(){
//         console.log(`my name is ${name} and my age is ${age}`);
//     }
// }

// let obj1= new person('Sunil', 26);
// let obj2= new person('rahul', 20);

// obj1.sayHelo();
// obj2.sayHelo();



// const weakSet= new WeakSet()
// let obj1= {name: 'sunil'};
// let obj2= {age: 26};
// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1));


// const mySet = new Set();

// mySet.add(1);
// mySet.add('Hello');
// mySet.add({ key: 'value' });

// console.log(mySet);  // Output: 3


// const myWeakSet = new WeakSet();

// const obj1 = { key: 'value' };
// const obj2 = { a: 1, b: 2 };

// myWeakSet.add(obj1);
// myWeakSet.add(obj2);

// console.log(myWeakSet.has(obj1));  // Output: true

// const myMap= new Map()
// myMap.set('myName', 'sunil')
// myMap.set('myAge', '26')

// for(let [key, value] of myMap){
// console.log(`${key}=>${value}`);
// }
// console.log(myMap);

// const str = "Hello";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

//convert string into array of characters.
// let str= 'sunil';
// console.log(Array.from(str));

// function reverseStr(str){
//     if(str=='' ){
//         return str;
    
//     }

//     return  reverseStr(str.substring(1))+str[0]
// }

//  console.log(reverseStr('hello world')); 

