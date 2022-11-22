"use strict"; /*"use strict"; Defines that JavaScript code should be executed in "strict mode"*/
console.log('------------- Q1 ----------------');
const max = function max(x, y) {
    if (x < y) {
        return y;
    }
    else return x;
};
console.log(`max of (5,10) is : ${max(5, 10)}`);
/* Template literals are literals delimited with backtick (`) characters. 
They can be used for String interpolation with embedded expressions and also to create multi-line strings.
 */
console.log("\n");
console.log('------------- Q2 ----------------');

function maxOfthree(x, y, z) {

    if (x > y && x > z) {
        return x;
    }
    else if (y > x && y > z) {
        return y;
    }
    else return z;
}
console.log(`Max of (7, 15, 10) is : ${maxOfthree(7, 15, 10)}`);

console.log("\n");
console.log('------------- Q3 ----------------');

function isVowel(c) {
    c = c.toLowerCase();

    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') return true;
    else return false;
}

console.log(`z is vowel : ${isVowel('z')}`);
console.log(`e is vowel : ${isVowel('e')}`);

console.log("\n");
console.log('------------- Q4 ----------------');

/*arguments Object
    JavaScript functions have a built-in object called the arguments object. 
    The arguments object contains an array of the arguments used when the function is called (invoked).
*/
function sum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
    };
    return sum;
}
console.log(`Sum of [1,2,3,4] is : ${sum([1, 2, 3, 4])}`);
function muliply(array) {
    let multiply = 1;
    for (let index = 0; index < array.length; index++) {
        multiply = multiply * array[index];
    };
    return multiply;
}
console.log(`Multiply of [1,2,3,4] is : ${muliply([1, 2, 3, 4])}`);

console.log("\n");
console.log('------------- Q5 ----------------');

function reverse(string) {
    let s = '';
    for (let index = string.length - 1; index >= 0; index--) {
        s = s + string.charAt(index);

    };
    return s;
}
console.log(`reverse of ('jag testar') is : '${reverse('jag testar')}'`);

console.log("\n");
console.log('------------- Q6 ----------------');

function findLongestWord(array) {
    let maxword = array[0];
    let maxLength = array[0].length;
    for (let index = 1; index < array.length; index++) {
        if (array[index].length > maxLength) {
            maxLength = array[index].length;
            maxword = array[index];
        }
    };
    return maxLength;
}
console.log(`Max word ['a', 'ab', 'abbbbc', 'aabbc']  length is : '${findLongestWord(['a', 'ab', 'abbbbc', 'aabbc'])}'`);

console.log("\n");
console.log('------------- Q7 ----------------');

function filterLongWords(array, i) {
    var result = new Array();
    for (let index = 0; index < array.length; index++) {
        if (array[index].length > i) {
            result.push(array[index])
        }
    };
    return result;
}
console.log();

console.log("\n");
console.log('------------- Q8 ----------------');

const numbers = [1, 2, 3];
const computeSumOfSquares = numbers.reduce((acc, num) => (num * num) + acc, 0);
console.log(`sum of square of [1, 2, 3] is : '${computeSumOfSquares}'`);

/*arr.reduce(callback[, initialValue]) 
- The reduce() method applies a function against an accumulator and each value of the array(from left - to - right) to reduce it to a single value.
(arguments) => { return statement } // general syntax
argument => { return statement } // one parameter
argument => statement // implicit return
() => statement // no input

*/
console.log("\n");
console.log('------------- Q9 ----------------');

const number2 = [2, 0, 5, 3, 10, 7, 5];
const printOddNumbersOnly = number2.filter(number2 => number2 % 2 != 0);
console.log('Odd numbers in [1, 2, 3, 10, 7, 5]');
printOddNumbersOnly.forEach(element => {
    console.log(element);
});

console.log("\n");

console.log('------------- Q10 ----------------');

const number3 = [1, 2, 3, 4, 5];

const computeSumOfSquaresOfEvensOnly = number3.filter(number => number % 2 == 0);
// console.log(computeSumOfSquaresOfEvensOnly);
const result2 = computeSumOfSquaresOfEvensOnly.reduce((acc, x) => (x * x) + acc, 0)
console.log("sum of square of even numbers in [1,2,3,4,5] is :");
console.log(result2);




// const user = { id: 4201, name1: "Bob", isGraduate: true };
// const { id, name1, isGraduate } = user;
// const x = { id, name1, isGraduate }
// console.log('hello');
// console.log(x);
// console.log(id + ", " + ", " + isGraduate);

console.log("\n");
console.log('------------- Q11 ----------------');

const number5 = [1, 2, 3, 4];

console.log(`sum of numbers [${number5}] is ${number5.reduce((acc, number) => acc + number, 0)}`);
console.log(`Product of numbers [${number5}] is ${number5.reduce((acc, number) => acc * number, 1)}`);

console.log("\n");
console.log('------------- Q12 ----------------');

function findSecondBiggest(array) {
    let firstMax = array[0];
    let secondMax = array[1];
    if (secondMax > firstMax) {
        firstMax = a[1];
        secondMax = a[0];
    }
    for (let index = 2; index < array.length; index++) {
        if (array[index] > secondMax) {
            secondMax = array[index];
            if (secondMax > firstMax) {
                let temp = firstMax;
                firstMax = secondMax;
                secondMax = temp;
            }
        }
    }
    return secondMax;
}
const a = [29, 19, 11, 0, 12, 13];
console.log(`second biggest element in [${a}] is ${findSecondBiggest([29, 19, 11, 0, 12, 13])}`);

console.log("\n");
console.log('------------- Q13 ----------------');
function printFibo(n, a, b) {
    let fibo = [0, 1];
    if (n == 1) {
        console.log(fibo[0]);
    }
    if (n == 2) {
        let text = "";
        fibo.forEach(element => {
            text += element + " ";
        });
        console.log(text);
    }
    if (n > 2) {
        for (let i = 2; i < n; i++) {

            fibo.push(fibo[i - 1] + fibo[i - 2]);

        }
        let text = '';
        fibo.forEach(element => {

            text += element + " ";
        });
        console.log(text);
    }

}

printFibo(10, 0, 1)

