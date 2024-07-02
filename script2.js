// function isPalindrome(str){
//     let tempStr='';
//     for(let i=str.length-1; i>=0; i--){
//      tempStr+= str.charAt(i);
//     }
//     console.log(tempStr);
//    return tempStr==str?true:false
// }

// console.log(isPalindrome('aba'));

// function fact(num){
//  return num<=1?1:num*fact(num-1);
// }
//  console.log( fact(5));

// function isPrime(n) {
//   if (n == 1) {
//     return false
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false
//     }
//   }
//   return true
// }
// let res=isPrime(2);
// console.log(res);

// function printFabanacci(term){
//    let n1=0,n2=1, nextTerm;
//    for(let i=0; i<term; i++){
//     console.log(n1);
//     nextTerm= n1+n2;
//     [n1, n2]=[n2, nextTerm];
//    }
// }
// printFabanacci(7);
// Memoization function to cache the results of expensive computations
// function memoizedFunction() {
//    // Cache to store computed results
//    const cache = {};

//    return function(n) {
//      // If the result for 'n' is already cached, return it
//      if (n in cache) {
//        console.log(`Fetching result for ${n} from cache`);
//        return cache[n];
//      } else {
//        // Otherwise, compute the result and cache it
//        console.log(`Computing result for ${n}`);
//        const result = n * 2; // Example computation
//        cache[n] = result;
//        return result;
//      }
//    };
//  }

//  // Create a memoized version of the function
//  const memoized = memoizedFunction();

//  console.log(memoized(3)); // Output: Computing result for 3, 6
//  console.log(memoized(3)); // Output: Fetching result for 3 from cache, 6
//  console.log(memoized(5)); // Output: Computing result for 5, 10
//  console.log(memoized(5)); // Output: Fetching result for 5 from cache, 10

// let arr = [1, 2, 4, 6, 4, 2, 9, 7];

// for(let i=0; i<arr.length-1; i++){
//    for(let j=0; j<arr.length-1-i; j++){
//     if(arr[j]>arr[j+1]){
//         [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
//     }
//    }
// }
// console.log(arr);

// console.log(arr.sort());

// function binarySearch(sortedArr, toBeFind) {
//   let leftIndex = 0,
//     rightIndex = sortedArr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (sortedArr[midIndex] == toBeFind) {
//       return midIndex;
//     } else if (toBeFind > midIndex) {
//       leftIndex = midIndex + 1;
//     } else {
//       rightIndex = midIndex - 1;
//     }
//   }
//   return -1;
// }

// let sortedArr = arr.sort();
// console.log(sortedArr);
// let toBeFind = 9;
// console.log(binarySearch(sortedArr, toBeFind));

// function modifyArray(arr, callback){
// arr.push(100);
// callback();
// }

// let arr= [1,2,4,5,3,3,6];
// let f1=()=>{
//   console.log('arr is modified ', arr);
// }

// modifyArray(arr, f1);

// function reverseWords(str){
//    return str.split(' ').map(word=>word.split('').reverse().join(''));

// }
// let str='Welcome to this javaScript guide!';

// console.log(reverseWords(str));

// let arr= [2,3,4,5,6];
// // console.log(arr.concat(arr, arr, arr ,arr));
// console.log( [...arr, ...arr]);

// console.log(mult(4)(5)(7));

// function mult(x){
//   return function(y){
//     return function(z){
//       return x*y*z;
//     }
//   }
// }

//.......................................
// function evenNumber(arr){
// let resArr= arr.filter((item)=>{
//    return item%2==0
// });
// console.log(resArr);
// }
// let arr= [2,4,5,6,8,5,3];
// evenNumber(arr);

// function fact(num){
// return num<=1?num:num*fact(num-1);
// }
// let res= fact(5);
// console.log(res);

// function isPrime(num){
//     if(num<=1){
//         return false;
//     }
//     for(let i=2; i<num; i++){
//         if(num % i==0){
//             return false
//         }
//     }

//     return true;
// }

// console.log(isPrime(0));

// function largestInNestedArray(arr) {
//   // console.log(arr.flat().flat());
//   // let flatArr= arr.flat().flat();
//   // return Math.max(...flatArr);

//   let resultArr = [];
//   arr.forEach((element) => {
//     if (Array.isArray(element)) {
//       //    resultArr=  resultArr.concat( largestInNestedArray(element));
//       resultArr = [...resultArr, ...largestInNestedArray(element)];
//     } else {
//       resultArr.push(element);
//     }
//   });

//   return resultArr;
// }

// let resArr= largestInNestedArray([1, 2, 3, [4, 5, 6, [7, 8, 11], 9], 10]);
// let max= 0;
//  resArr.forEach((item)=>{
//     if(item>max){
//         max=item;
//     }
//  });
//  console.log(max);

// function fab(term){

//     let n1=0, n2=1, nextTerm;

//     for(let i=0; i<term; i++){
//         console.log(n1);
//         nextTerm= n1+n2;
//         n1=n2;
//         n2=nextTerm;
//     }
// }
// fab(6);

// function titleCase(str){
// let strArr= str.split(' ');
// console.log(strArr);
// let resArr=[];
// strArr.forEach((item)=>{
//   let firstChar=  item[0].toUpperCase();
// //   console.log(firstChar);
//   let remainingStr= item.substring(1);
// //   console.log(remainingStr);
// let finalStr= firstChar+remainingStr;
// // console.log(finalStr);
// resArr.push(finalStr);
// });

// console.log(resArr.join(' '));
// }
// titleCase('hey, how are you?')

// function sortArrByKey(arr, key) {

// let res=  arr.sort((a,b)=>{
//     if (typeof a[key] === 'string' && typeof b[key] === 'string') {
//         // For string comparison, use localeCompare to handle case differences and locale-specific ordering
//         return a[key].localeCompare(b[key]);
//       } else {
//         // For number comparison
//         return a[key] - b[key];
//       }
// });
//   console.log(res);
// }
// let arr = [
//   { name: "sunil", age: 26, email: "sk@gmail.com" },
//   { name: "zakir", age: 22, email: "joe@gmail.com" },
//   { name: "Raj", age: 28, email: "sk@gmail.com" },
// ];

// sortArrByKey(arr, 'age');

function convertToTitleCase(str){
return str.split(' ').map(word=>word[0].toUpperCase()+ word.substring(1)).join(' ');

}

let res= convertToTitleCase('sunil kumar saw');
console.log(res);