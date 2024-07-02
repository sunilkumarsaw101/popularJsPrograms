//for in loop

// let person = {
//     name: "John",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//     }
// };
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// };
//-----------------------------------------------------------------
// Object.keys().

// const myObj = {
//     prop1: { name: 'John', age: 25 },
//     prop2: { name: 'Sarah', age: 30 },
//     prop3: { name: 'Tom', age: 20 }
// };

// // console.log(Object.keys(myObj));  //it will give array of all the keys in the object myObj.
// Object.keys(myObj).map((key)=>{
//     console.log(myObj[key]);
// });
//---------------------------------------------------------------
// Object.entries().

// let person = {
// 	name: "John",
// 	age: 30,
// 	address: {
// 		street: "123 Main St",
// 		city: "Anytown",
// 		state: "CA",
// 		zip: "12345"
// 	}
// };

// // console.log(Object.entries(person));   //it wil give array of key value pair included in array.

// Object.entries(person).forEach(([key, value])=>{
//     console.log(key);
//     console.log(value);
// });

//----------------------------------------------------

//Object.values();

// const person = {
//     obj1: { name: "John", age: 30 },
//     obj2: { name: "Jane", age: 25 },
//     obj3: { name: "Bob", age: 40 }
// };

// // console.log(Object.values(person));  //it will give array of values from object person.

// Object.values(person).forEach((value)=>{
//     console.log(`name: ${value.name}, age: ${value.age}`);

// })

//filter or remove an element from object.

// let obj = { name: "Joey", age: "30", gender: "Male" };
//1. by filter

// const arrayOfKeys= Object.keys(obj);
// // console.log(arrayOfKeys);

// const filteredKey= arrayOfKeys.filter((key)=>key!= 'name');
// // console.log(filteredKey);

// let resObj={};

// filteredKey.forEach((key)=>resObj[key]=obj[key])

// console.log(resObj);

//2. by delete operator.

// delete obj.age;
// console.log(obj);

// let obj1= {
//     name: 'John',
//     age: 25,
//     gender: 'male',
//     address: {
//         city: 'Chennai',
//         state: 'Tamil Nadu',
//         pincode: '124323'
//     },
//     phone:'3432343434'

// }
// console.log(obj1);

//adding new property......................
//   obj1.language= 'english';
// obj1['language']= 'English';
//   console.log(obj1);

//remove a property........................
// delete obj1.gender;
// console.log(obj1);

//check if the object contains a particular property.
//using in operator.
//  console.log('language' in obj1);

//using hasOwnProperty.
// console.log(obj1.hasOwnProperty('address'));

// let mergeObj= Object.assign({}, obj1);

// let mergeObj= obj1;

// mergeObj.address.state= 'jharkhand';
// mergeObj.name= 'jane'
// console.log(obj1);
// console.log(mergeObj);



