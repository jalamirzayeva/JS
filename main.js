// 1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
let A = parseInt(prompt("A: "));
let B = parseInt(prompt("B: "));
let result = A / B;
let reminder = A % B;
console.log(result);

// 2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
let A = parseInt(prompt("A: "));
let B = parseInt(prompt("B: "));
let C=A; A=B; B=C;

console.log(A);
console.log(B);

let a  = parseInt(prompt("A : "));
let b  = parseInt(prompt("B : "));

b = b + a;
a = b - a;
b = b - a;

console.log("A : " + a);
console.log("B : " + b);

// 3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.

let a = parseInt(prompt("A : "));
let b = parseInt(prompt("B : "));
let c = parseInt(prompt("C : "));

if (a === 0 || b === 0 || c === 0) {
    console.log("The value of number cannot be zero");
}

else{
    let x = c - b / a;
    console.log(x);
}
// 4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
let a = parseInt(prompt(" A: "));
let b = parseInt(prompt(" B: "));
    if (a>b){

        let result=a+b;

        console.log(result);
    }
    else if(a==b){

        let result=a*b;

        console.log(result);
    }
    else {
        let result=a-b;

        console.log(result);
    }
// 5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
let a = parseInt(prompt("A : "));
let b = parseInt(prompt("B : "));
let c = parseInt(prompt("C : "));

let d = Math.pow(b , 2) - 4 * a * c;

if (d < 0) {
    console.log("There is no solution!");
}

else{
    let x1 = (-b + Math.sqrt(d)) / 2 * a;
    let x2 = (-b - Math.sqrt(d)) / 2 * a;

    console.log(`x1 is equal to ${x1} and x2 is equal to ${x2}`);
}

// 6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
let firstnumbers = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty" , "ninety"];
let secondnumbers = [ "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" ];
console.log("Type a number: ");
let number = parseInt(prompt("Input a number : "));
if (number < 100 && number > 9)
{
    switch (number)
    {
        case 10:
            console.log("Ten");
            break;
        case 11:
            console.log("Eleven");
            break;
        case 12:
            console.log("Twelve");
            break;
        case 13:
            console.log("Thirteen");
            break;
        case 14:
            console.log("Fourteen");
            break;
        case 15:
            console.log("Fifteen");
            break;
        case 16:
            console.log("Sixteen");
            break;
        case 17:
            console.log("Seventeen");
            break;
        case 18:
            console.log("Eighteen");
            break;
        case 19:
            console.log("Nineteen");
            break;
        default:
            let firstnumber = parseInt(number / 10);
            let secondnumber = number % 10;
            if (firstnumber > 0 && secondnumber > 0)
            {
                console.log(firstnumbers[firstnumber - 2] + " " + secondnumbers[secondnumber - 1]);
            }
            else if(firstnumber > 0 && secondnumber == 0)
            {
                console.log(firstnumbers[firstnumber - 2]);
            }
            break;
    }
}

else
{
    console.log("Number must be less than 100 and more than 9 :D");
}

// 7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)


let x = parseInt(prompt("x : "));
let y = parseInt(prompt("y : "));
let r = parseInt(prompt("r : "));

if (Math.pow(x,2) + Math.pow(y,2) === Math.pow(r,2)) {
    console.log("Point is on the circle");
}

else if (Math.pow(x,2) + Math.pow(y,2) > Math.pow(r,2)) {
    console.log("Point is out of the circle");
}

else{
    console.log("Point is inside a circle");
}