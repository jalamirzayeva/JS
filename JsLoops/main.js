// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// let a = parseInt(prompt("A : "));

// for (let i = 1; i <= 1000; i++) {
//     if (i % a === 0) {
//         console.log(i);
//     }
// }


// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// let a = parseInt(prompt("A : "));
// let counter = 0;

// for (let i = 1; i * i < a; i++) {
//     counter++;
// }

// console.log("Count is " + counter);

// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// let a = parseInt(prompt("A : "));
// let d = 0; // largest divisor
// for (let i = 1; i < a; i++)
// {
//     if (a % i == 0)
//     {
//         d = i;
//     }
// }

// console.log(d);


// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let sum = 0;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         if (i % 7 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// else if(a > b){
//     for (let i = b; i <= a; i++) {
//         if (i % 7 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }




// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// console.log("Input a : ");
// let a = parseInt(prompt("A : "));
// let n1 = 1;
// let n2 = 1;
// let n3 = 0;

//     for (let i = 2; i < a; i++)
//     {
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//     }
//     console.log(n3);


// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let gcd = 0;
// let remainder = 0;
// if (a > b)
// {
//     while (a % b > 0)
//     {
//        remainder = a % b;
//        a = b;
//        b = remainder;
//     }
//     gcd = b;
// }

// else
// {
//     while (b % a > 0)
//     {
//         remainder = b % a;
//         b = a;
//         a = remainder;
//     }
//     gcd = a;
// }

// console.log(gcd);



// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// let number  = parseInt(prompt("Number : "));
// let newnumber = 0;
// while (number > 0)
// {
//     newnumber *= 10;
//     newnumber += number % 10;
//     number = parseInt(number / 10);
// }

// console.log(newnumber);


// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
let a  = prompt("A : ");
let b  = prompt("B : ");

let isSame = false;

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            isSame = true;
        }
    }
}

console.log(isSame);