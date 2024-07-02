// function isPalindrome(str){
//   let res1= str.split('');
//   console.log(res1);
//   let res2= res1.reverse();
//   console.log(res2);
//   let res3= res2.join();
//   console.log(res3);
//   return str===res3?true:false
// }
// console.log(isPalindrome('abcd'));

// function fact(num){
//     if(num==1 || num==0){
//         return 1;
//     }

//    return  num*fact(num-1);
// }
// console.log(fact(5));

// function isPrime(n) {
//   if (n == 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//         console.log('hloo');
//         return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(2));

// function fabonacciSeries(numberOfTerms){
// let n1=0, n2=1, nextTerm;
//   for(let i=0; i<numberOfTerms; i++){
//     console.log(n1);
//     nextTerm= n1+n2;
//     n1= n2;
//     n2= nextTerm;
//   }
// }
// fabonacciSeries(7);

// function convertToTitleCase(str){
//  const resInArray= str.split(' ');
//  console.log(resInArray);
//  let resultArray= [];
//  resInArray.forEach(element => {
//     const fChar= element.charAt(0);
//     console.log(fChar);
//     const fCharInCaps= fChar.toUpperCase();
//     console.log(fCharInCaps);
//     const remainingStr= element.substring(1);
//     console.log(remainingStr);
//     const resultStr= fCharInCaps+remainingStr;
//     console.log(resultStr);
//        resultArray.push(resultStr);
//  });
//  console.log(resultArray);
// console.log(resInArray.join(' '));

// }
// convertToTitleCase('sunil kumar saw')

// function sortByKey(arr, key){
//   return arr.sort((a, b) => a[key] - b[key]);
// }

// let arrayOfObjects = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];
// let sortedArray= sortByKey(arrayOfObjects, 'age');
// console.log(sortedArray);

// deep copy or completely independent copy.
// function deepClone(originalObj){
//   const str= JSON.stringify(originalObj);
//   console.log(str);
//   const copyObj= JSON.parse(str);
//   console.log(copyObj);
//   copyObj.age= 50;
//   console.log(originalObj.age);
// }
// const originalObject = {
//   name: 'John',
//   age: 30,
//   address: {
//       city: 'Example City',
//       country: 'Example Country'
//   },
//   hobbies: ['Reading', 'Gaming']
// };
// // const originalArray= [1,2,3, details={name: 'sunil', address: 'jharkhand'}]
// deepClone(originalObject);

//shallow copy

// function shallowCopy(originalObj) {
//   let copyObj= {...originalObj};
//   console.log(copyObj);
//   copyObj.age=40;
//   copyObj.address.city= 'delhi';
//   console.log(copyObj);

//   console.log(originalObj);

// }
// let originalObj = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "Example City",
//     country: "Example Country",
//   },
//   hobbies: ["Reading", "Gaming"],
// };
// shallowCopy(originalObj);

//merge the sorted arrays
// function mergeSortedArrays(arr1, arr2){
// let merge= [...arr1, ...arr2];
// console.log(merge);
// let sorted= merge.sort((a,b)=>a-b);
// console.log(sorted);
// }
// let arr1= [2,4,7,9];
// let arr2= [5,7,8];
// mergeSortedArrays(arr1, arr2);

//iterate  object
// let obj1= {
//   name: 'sunil',
//   city: "chennai",
//   phone: '3454334543',
//   email: 'sunil@gmail'

// }

// for(let key in obj1){
//   // console.log(key);
//   console.log(key +' '+ obj1[key]);
// }

// are strings anagram
// function isAnagramStr(str1, str2){
//      str1= str1.toLowerCase();
//      str2= str2.toLowerCase();

//    const res1= str1.split('').sort().join();
//    const res2= str2.split('').sort().join();

//    console.log(res1, res2);
//    if(res1== res2){
//    return console.log('yesss');
//    }
//    console.log('no');
// }
// isAnagramStr('dogs', 'god');

// function reverseStrWithoutBuitInMethod(str){
// let reverString='';
// for(let i=str.length-1; i>=0; i--){
//     // reverString+= str[i];
//     reverString+= str.charAt(i);
// }
// console.log(reverString);
// }
// let str='abcdefg';
// reverseStrWithoutBuitInMethod(str);

//max and min
// function maxAndmin(arr){
// let max= Math.max(...arr);
// let min= Math.min(...arr);

// // without built-in method.
// //  let max= 0;
// //  for(let i=0; i<arr.length; i++){
// //   if(arr[i]>max){
// //     max= arr[i];
// //   }
// //  }
// console.log('max: ', max);
// // console.log('min: ', min);

// }
// let arr= [2,3,4,5,66,3]
// maxAndmin(arr);

// function getUniqueElements(arr){
//    const uniqueSet= new Set(arr);
//    console.log(uniqueSet);
//     // const uniqueArray= Array.from(uniqueSet);
//    const uniqueArray= [...uniqueSet];
//    console.log(uniqueArray);
// }
// let arr= [2,3,4,5,66,3];
// getUniqueElement(arr);

// function findSumWitReduce(arr){
//  let res= arr.reduce((sum, num)=>sum+num);
//  console.log(res);
// }
// let arr= [2,3,4,5,66,3];
// findSumWitReduce(arr);

// function countCharactorOccurences(str){
//  const charCount={};
//   for(let char of str){
//     charCount[char]= (charCount[char]||0)+1;
//   }
//   console.log(charCount);
// }
// let str= 'sunilkumarsaw';
// countCharactorOccurences(str);

// function removeDuplicate(arr){
// let uniqueArr= [];
// for(let value of arr){
//   if(!uniqueArr.includes(value)){
//    uniqueArr.push(value);
//   }
// }
// console.log(uniqueArr);
// }
// let arr= [1,2,3,4,5,1,2]
// removeDuplicate(arr);

// function reverseSentence(sentence) {

//   const words = sentence.split(' ');
// console.log(words);
//   const reversedWords = words.reverse();
// console.log(reversedWords);
//   let res= reversedWords.join(' ');
// console.log(res);

// }
// reverseSentence('sunil kumar saw');
//.................................................................
//largest difference between any two numbers in the array.

// function largestDifferece(arr){
// let maxDiff=0;
// let min=arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
//     else{
//         const diff= arr[i]-min;
//         if(diff>maxDiff){
//             maxDiff=diff;
//         }
//     }
// }
// console.log(maxDiff);
// }
// let arr= [4,8,20,10,5,1];
// largestDifferece(arr);

//----------------------------------

// function removeDuplicate(arr){
// let resArr= [];
// for(let ele of arr){
//     if(!resArr.includes(ele)){
//         resArr.push(ele);
//     }
// }
// console.log(resArr);
// }
// let arr= [4,4,20,10,4,1];

// removeDuplicate(arr);

//--------------------------------------------------

//concat/merge two arrays.

// let arr1= [1,2,3,4,5];
// let arr2= [5,4,3,6,0];

// let result= arr1.concat(arr2);
// console.log(result);
//--------------------------------------------------

//function that flattens a nested array in JavaScript, converting it into a single-level array.

// function flattensNestedArray(arr){
//    let result=[];
//    for(let i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//     result= result.concat(flattensNestedArray(arr[i]));
//     }else{
//         result.push(arr[i]);
//     }
//    }
//    return result;
// }

// let nestedArray= [1,3,[4,5,[6,8],9],4,6,[0,5],7];
// console.log(flattensNestedArray(nestedArray));
//-----------------------------------------------------------------

// function secondSmallestNum(arr){
//  let sortedArr= arr.sort((a,b)=>a-b);
//  console.log(sortedArr[1]);
// }

// const arr=[1,5,6,8,,3,2,0];
// secondSmallestNum(arr);

//--------------------------------------------------------------------
// function generateRandomStringOfGivenLength(length){
//      let resultStr= '';
//     const charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     for(let i=0; i<length; i++){
//         const randomIndex= Math.floor(Math.random() * charset.length);
//         const randomChar= charset.charAt(randomIndex);
//         resultStr+= randomChar;
//     }
//     console.log(resultStr);
// }
// generateRandomStringOfGivenLength(5);

//--------------------------------------------

// function sortArrayOfString(arr){
// let result= arr.sort();
// console.log(result);
// }
// let arr1= ['sunil', 'kumar', 'jharkhand']
// sortArrayOfString(arr1);

//----------------------------------------------

// function findElementIndex(arr, element){
//     let index=-1;
//     // for(let i=0; i<arr.length; i++){
//     //     if(arr[i]==element){
//     //         index=i;
//     //     }
//     // }

//     index= arr.indexOf(element);
//     console.log(index);
// }
// let arr= [3,4,6,7,8,9,5];
// findElementIndex(arr, 6);

//--------------------------------------------------

// function removeFalsyValue(arr){
//   let result=  arr.filter(item=>{
//         if(item){
//             return item;
//         }
//     });
//     console.log(result);
// }

// let arr=[0,null, 1, false, true, undefined, 3]
// removeFalsyValue(arr);

// function minLengthstr(arr){
//     // longestCommonPrefix(arr,n){
//         //code here
//         const minLength= Math.min(...arr.map((str)=>str.length))

//         for(let i=0; i<minLength; i++){
//             for(let j=1; j<arr.length; j++){
//                 if(arr[j][i]!=arr[0][i]){
//                     return arr[0].slice(0,i);
//                 }
//             }
//         }
//         return arr[0].slice(0, minLength);

//     // }
// }
// console.log(minLengthstr(['geeksforgeeks', 'geeks', 'geek', 'geezer']));

// function binarySearch(sortedArr, target){
//     let leftIndex= 0;
//     let rightIndex= sortedArr.length-1;

//     while(leftIndex <= rightIndex){

//         let midIndex= Math.floor((leftIndex + rightIndex)/2);

//         if(sortedArr[midIndex]==target){
//             return midIndex;
//         }
//         else if(sortedArr[midIndex]<target){
//              leftIndex= midIndex+1;
//         }
//         else{

//            rightIndex=midIndex-1;
//         }
//     }
//     return -1
// }

// const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const target = 11;
// const index = binarySearch(sortedArray, target);
// console.log("Index of", target, ":", index);

//bubble sort
// function bubbleSort(arr) {
//     const n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         // Last i elements are already sorted, so we don't need to check them
//         for (let j = 0; j < n - i - 1; j++) {
//             // If current element is greater than the next one, swap them
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements using a temporary variable
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }

//     return arr;
// }

// // Example usage:
// const array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original Array:", array);
// console.log("Sorted Array:", bubbleSort(array));

//Promise.all()

// const promise1= Promise.resolve(1);
// const promise2= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(2);
//     }, 1000);
// });
// const promise3= new Promise((resolve, reject)=>{
//     // setTimeout(() => {
//     //     resolve(3);
//     // }, 5000);
//     setTimeout(() => {
//         reject('Failed');
//     }, 5000);
// });

// Promise.all([promise1, promise2, promise3]).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log('this is the err: ', err);
// })

//Promise.allSettled();

// const promise1= Promise.resolve(1);
// const promise2= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(2);
//     }, 1000);
// });
// const promise3= new Promise((resolve, reject)=>{
//     // setTimeout(() => {
//     //     resolve(3);
//     // }, 5000);
//     setTimeout(() => {
//         reject('Failed');
//     }, 5000);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log('this is the err: ', err);
// })

// Promise.race()

// const promise1= Promise.reject(1);
// const promise2= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(2);
//     }, 1000);
// });
// const promise3= new Promise((resolve, reject)=>{
//     // setTimeout(() => {
//     //     resolve(3);
//     // }, 5000);
//     setTimeout(() => {
//         reject('Failed');
//     }, 5000);
// });

// Promise.race([promise1, promise2, promise3]).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log('this is the err: ', err);
// })

//.......................................................................

//find first non reapeated charactor in the string.
// let str = "cbcbdde";

// function findNonRepeatedChar(str) {
//   let charCount = {};
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (let key in charCount) {
//     if (charCount[key] == 1) {
//       console.log(key);
//     }
//   }
// }

// findNonRepeatedChar(str);

//sorting array of string by its length

// let arr=  ["You", "me", "beautiful", "looking"];

// function sortArrayOfString(arr){
//  arr.sort((a,b)=>a.length-b.length);
//  console.log(arr);
// }

// sortArrayOfString(arr);

//checking that an string contains a substring.

// let str= 'sunil kumar saw';
// let subStr= 'kumarqq';

// if(str.includes(subStr)){
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

//print duplicate characters in an string

// function printDuplicateChar(str){
//   let charCount={};
//   for(let char of str){
//     charCount[char]= (charCount[char] || 0)+1;
//   }
//   console.log(charCount);
//   for(let key in charCount){

//     if(charCount[key]>1){
//         console.log(key);
//     }
//   }
// }
// let str= 'sunil kumar saw';
// printDuplicateChar(str)

//reverse string using recursion

// function reverseString(str){
//    if(str.length<=0){
//     return '';
//    }
//    return reverseString(str.substring(1))+ str[0];
// }
// let str= 'sunil kumar';
// console.log(reverseString(str));

//How do you check if a string contains only digits

// function checkDigit(str) {
//  for(let i=0; i<str.length; i++){
//     let AsciiCode= str.charCodeAt(i);
//     if(AsciiCode<48 || AsciiCode>57){
//         return false
//     }
//  }
// return true
// }
// let str = "1233wdx";
// console.log(checkDigit(str));

//How do you count a number of vowels and consonants in a given string?

// function countVowelConsonant(str) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;
//   let consonantCount = 0;
//   for (let char of str) {
//     if (vowel.includes(char) ) {
//       vowelCount++;
//     } else if(char!==' '){
//       consonantCount++;
//     }
//   }
//   console.log("vowel: ", vowelCount);
//   console.log("consonant: ", consonantCount);
// }
// let str = "sunil kumar saw";
// countVowelConsonant(str);

//find secondLargestElement in the array without using any build-in method and only one for-loop.

// function findSecondLargest(arr){
//  let largest =arr[0];
//  let secondLargest= arr[0];
//  for(let i=1; i<arr.length; i++){
//     if(arr[i]>largest){
//         secondLargest= largest;
//         largest= arr[i];
//     }else if(arr[i]> secondLargest && arr[i]!==largest){
//         secondLargest= arr[i];
//     }
//  }
//  return secondLargest;
// }
// let arr= [1,3,5,7,2,4,8,6,0,9];

// let result= findSecondLargest(arr);
// console.log(result);

// How do you reverse words in a given sentence without using any library method?

// function reverseWords(sentence){
//   let reverseSentence= '';
//   let word= '';
//   for(let i= 0; i<sentence.length; i++){
//     if(sentence[i]!==' '){
//         word += sentence[i];
//     }else{
//         reverseSentence= word+ ' '+ reverseSentence;
//         word=''
//     }
//   }
//   //append the last word;
//   reverseSentence= word+ ' '+ reverseSentence;
//   return reverseSentence;
// }
// let str= 'Sunil Kumar Saw';
// let result= reverseWords(str);
// console.log(result);

//how to remove the duplicate character from String?

// function removeDuplicateFromString(str){
//     // let resA=[];
//     // str.split('').forEach(element => {
//     //     if(!resA.includes(element)){
//     //         resA.push(element);
//     //     }
//     // });

//     // console.log(resA.join(''));

//     //..........................................
//     let uniqueStr='';
//     for(let char of str){
//         if(uniqueStr.indexOf(char)==-1){
//             uniqueStr+= char;
//         }
//     }
//     console.log(uniqueStr);

// }
// let str= 'sunilkumarsaw';
// removeDuplicateFromString(str);

//How to find the maximum occurring character in given String?

// function findMaxOccuringChars(str) {
//   let charCount = {};
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   console.log(charCount);

//   //     let max= Math.max(...Object.values(charCount));
//   //    for (const key in charCount) {
//   //       if(charCount[key]==max){
//   //         console.log(key);
//   //       }
//   //    }

//   let maxChar = "";
//   let maxCount = 0;
//   for (const key in charCount) {
//     if (charCount[key] > maxCount) {
//       maxChar = key;
//       maxCount = charCount[key];
//     }
//   }
//   console.log(maxChar);
// }
// let str = "sunilkumarsawsimariya";
// findMaxOccuringChars(str);

//How do you remove a given character from String?
// function removeGivenChar(str, char) {
//   //    for (const ch of str) {
//   //     if(ch==char){
//   //       str=  str.replace(ch, '');
//   //     }
//   //    }
//   //    console.log(str);

//   let strRes = "";
//   for (let ch of str) {
//     if (ch != char) {
//       strRes += ch;
//     }
//   }
//   console.log(strRes);
// }
// let str = "sunilkumar";
// removeGivenChar(str, "u");

//Given an array of strings, find the most frequent word in a given array.
// function mostFreqWord(arr){
// let charCount={};

// arr.forEach(item=>{
//     charCount[item]= (charCount[item] || 0)+ 1;

// })
// console.log(charCount);
// let maxChar='';
// let maxCount=0;
// for(let key in charCount){
//     if(charCount[key]>maxCount){
//         maxChar=key;
//         maxCount= charCount[key];
//     }
// }
// console.log(maxChar);
// }
// let arr= ['hey', 'hello', 'how', 'hey'];
// mostFreqWord(arr);

//merge two objects.

// let obj1= {a:1, b:2}
// let obj2= {c: 3, d: 4}

// let mergeObj= Object.assign(obj1, obj2)
// console.log(mergeObj);

// arr=[3,5,6,3,4,4,5,6,7,7,1]
// output=[
//     {'1':1}
//     {'3': 2},
//     {'4':2},
//     {'5':2},
//     {'6':2},
//     {'7':2},

//     ]

// function countArrEle(arr){
//    let countMap={};
//    let outputArr= [];
//    arr.forEach(item => {
//     countMap[item]= (countMap[item] || 0) +1;

//    });

//  let arrOfEntries= Object.entries(countMap);

//  for(let item of arrOfEntries){
//     // console.log(item);
//     let obj= {};
//     let [num, count]= item;
//     obj[num]= count;

//     outputArr.push(obj)

//  }
//  return outputArr;

// }
// let arr= [3,5,6,3,4,4,5,6,7,7,1];
// let res= countArrEle(arr);
// console.log(res);

// function printDiamond(height) {
//     if (height % 2 === 0) {
//         // If height is even, add 1 to make it odd
//         height++;
//     }

//     let spaces = height - 1;
//     let stars = 1;

//     for (let i = 0; i < height; i++) {
//         let row = '';

//         // Add spaces
//         for (let j = 0; j < spaces; j++) {
//             row += ' ';
//         }

//         // Add stars
//         for (let j = 0; j < stars; j++) {
//             row += '*';
//         }

//         // Print row
//         console.log(row);

//         if (i < height / 2) {
//             spaces--;
//             stars += 2;
//         } else {
//             spaces++;
//             stars -= 2;
//         }
//     }
// }

// // Call the function with desired height
// printDiamond(5); // Change the argument to set the height of the diamond

//    *
//   ***
//  *****
//   ***
//    *

// let height=5;
// for (let i = 0; i < height; i++) {
//     let row = '';

//     // Add spaces
//     for (let j = height - 1; j > i; j--) {
//         row += '0';
//     }

//     // Add stars
//     for (let k = 0; k < 2 * i + 1; k++) {
//         row += '*';
//     }

//     console.log(row);
// }

// for (let i = height - 2; i >= 0; i--) {
//     let row = '';

//     // Add spaces
//     for (let j = height - 1; j > i; j--) {
//         row += '0';
//     }

//     // Add stars
//     for (let k = 0; k < 2 * i + 1; k++) {
//         row += '*';
//     }

//     console.log(row);
// }

// let arr = ["hello", "world", "java", "hello", "java"];
// function countWords(arr) {
//   let res = arr.reduce((allNames, name) => {
//     if (allNames[name]) {
//       allNames[name]++;
//     } else {
//       allNames[name] = 1;
//     }

//     return allNames;
//   }, {});

//   return res;
// }

// let res = countWords(arr);

// console.log(res);

//flat an array

// const arr = [1, [2, 3], [4, [5, 6]]];
// let resArr= [];
// function flatten(arr, resArr){

//   arr.forEach((item)=>{
//     if(Array.isArray(item)){
//         flatten(item, resArr);
//       }else{
//           resArr.push(item)
//       }
//   });

// }

// flatten(arr, resArr);
// console.log(resArr)

// console.log(arr.flat(Infinity))

// function fabonacciSeries(numberOfTerms){
//     let n1=0, n2=1, nextTerm;
//     for(let i=0; i<numberOfTerms; i++){
//         console.log(n1);
//         nextTerm=n1+n2;
//         n1=n2;
//         n2=nextTerm;

//     }
// }

// // fabonacciSeries(8);
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

// Object.entries(person).map(([key, value])=>console.log(key, value));

const data = [
  {
    City: "New York",
    Country: "USA",
    number: [1, 3, 5],
  },
  {
    City: "London",
    Country: "UK",
    number: [5, 4, 8],
  },
];

//expected output: [1, 3, 5, 5, 4, 8]
//use only single loop or single array method.

// let resArr = [];
// data.forEach((item) => {
//   //   resArr=  resArr.concat(item.number)
//   resArr = [...resArr, ...item.number];
// });

// console.log(resArr);

//using flatMap() method.
// let res= data.flatMap(item=>item.number);
// console.log(res);
