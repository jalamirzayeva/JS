let arr = [45,76,89,3,76,23,456,1];
//task1
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(min);


// -----------------------------------

// task2
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);


// ----------------------------------------------



//Task3

// let index = 0;
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//         index = i;
//     }
// }

// console.log(index);


// ---------------------------------------------

// task4
// let index = 0;
// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//         index = i;
//     }
// }

// console.log(index);

// -----------------------------------------
//Task5

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         sum += arr[i];
//     }    
// }

// console.log(sum);
// ------------------------------------------



//Task6

// function Reverse(arr) {
//     let temp = 0;
//     for (let i = 0; i < arr.length / 2; i++) {
//         temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp; 
//     }
//     arr.forEach(element => {
//         console.log(element);
//     });
// }

// Reverse(arr);

// ---------------------------------------------

//Task7

// let count = 0;

// arr.forEach(element => {
//     if (element % 2 == 1) {
//         count++;
//     }
// });

// console.log(count);


// ---------------------------------------------


// task8
// const arr = [56, 8, -3, 55,8,9,10];//55 5 -3 56 8
// console.log(`Original array:${arr}`);
// let y;
// let m;
// if (arr.length % 2 == 1) {
//   m = (arr.length - 1) / 2 ;
// } else {
//   m = arr.length / 2;
// }
// for (let i = 0; i < m; i++) {
//     y = arr[i];
//     if(arr.length%2==0){
//         arr[i] = arr[i+m];
//         arr[i+m] = y;
//     }
//     else{
//       arr[i] = arr[i+m+1];
//       arr[i+m+1] = y;
//     }
// }
// console.log(`Reversing array:${arr}`)



// --------------------------------------


// task9
//selection sort
// var len = arr.length;
// for (var i = 0; i < len - 1; i = i + 1) {
//     var j_min = i;
//     for (var j = i + 1; j < len; j = j + 1) {
//         if (arr[j] < arr[j_min]) {
//             j_min = j;
//         }
//     }
//     if (j_min !== i) {
//         var t = arr[i];
//         arr[i] = arr[j_min];
//         arr[j_min] = t;
//     }
// }

// console.log(arr);

//bubble sort
// sorted = false;

// while(!sorted) {
//   sorted = true;
//   for(var i=0; i < arr.length; i++) {
//     if(arr[i] < arr[i-1]) {
//       let temp = arr[i];
//       arr[i] = arr[i-1];
//       arr[i-1] = temp;
//       sorted = false;
//     }
//   }
// }

// console.log(arr);

// insertion sort

// function insertion_sort(arr) {
//     var len = arr.length;
//     var i = 1;
//     while (i < len) {
//         var x = arr[i];
//         var j = i - 1;
//         while (j >= 0 && arr[j] > x) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j+1] = x;
//         i = i + 1;
//     }
// }

// insertion_sort(arr);
// console.log(arr);


// ---------------------------------------

// task10

//bubble sort
// const arr = [56 ,-3,15,4,98]
// console.log(`Original array:${arr}`)
// let x=0
// let t=1
// while(x<=arr.length-1){
//     let m= 1
//     for(let i = 0;i<arr.length-x;i++){
//         if(arr[i]<arr[i+1]){
//           let y = arr[i]
//           arr[i]=arr[i+1]
//           arr[i+1]=y
//         }
//         console.log(`     //Step ${t}.${m}:  ${arr}`)
//         m++
//       }
//       x++
//       t++
// }
// console.log(`Sorting array:${arr}`)

