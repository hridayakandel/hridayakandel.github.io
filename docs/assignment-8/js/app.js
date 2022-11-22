/**
 * app.js
 */

"use strict";
console.log("hello");
console.log("============ Question 6 ===================")
const count = (function () {
    let counter = 0;
    const add = function () {
        counter += 1;
        return counter;
    }
    const reset = function () {
        counter = 0;
        return counter;
    }
    return {
        add: add,
        reset: reset
    }
})();
console.log(count.add());
console.log(count.add());
console.log(count.reset());


//  counter is free variable.
// It is not in the contxt of the function
console.log("============ Question 8 ===================")

const make_count = (function () {
    let counter = 0;
    const add = function () {
        counter += 1;
        return counter;
    }
    const reset = function () {
        counter = 0;
        return counter;
    }
    const value = function () {
        return counter;
    }
    const make_adder = function (inc) {
        return function adder() {
            counter += inc;
        }
    }
    return {
        add: add,
        reset: reset,
        value: value,
        make_adder: make_adder
    }
})();
const add5 = make_count.make_adder(5);
add5();
add5();
add5();
console.log("after add 5 three times", make_count.value());
const add7 = make_count.make_adder(7);
add7();
add7();
add7();
console.log("after add 7 three times", make_count.value());

console.log("============ Question 9 ===================")
console.log(' By using Module Pattern, one can remove all names from the Global namespace.');

console.log("============ Question 10 ===================")
const Employee = (function () {
    let name = "";
    let age = 0;
    let salary = 0.0;
    const getName = function () {
        return name;
    }
    const getAge = function () {
        return age;
    }
    const getSalary = function () {
        return salary;
    }
    const setName = function (newName) {
        name = newName;
    }
    const setAge = function (newAge) {
        age = newAge;
    }
    const setSalary = function (newSalary) {
        salary = newSalary;
    }
    const increaseSalary = function (percentage) {
        let salary = getSalary();
        salary = (percentage / 100) * salary + salary;
        setSalary(salary);
    }
    const incrementAge = function () {
        let age = getAge();
        age += 1;
        setAge(age);
    }
    const printEmployee = function () {
        console.log(`Name: ${getName()}; Age: ${getAge()}; Salary: ${getSalary()} `);
    }
    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        incrementAge: incrementAge,
        increaseSalary: increaseSalary,
        printEmployee: printEmployee
    }
})();
Employee.setName("John Doe");
Employee.setAge(20);
Employee.setSalary(20000);
Employee.printEmployee();
Employee.incrementAge();
Employee.increaseSalary(10);
Employee.printEmployee();

console.log("============ Question 11===================")

Employee.address = "";
Employee.getAddress = function () {
    return this.address;
}
Employee.setAddress = function (newAddress) {
    this.address = newAddress;
}
Employee.setAddress("1000N 4th Street, Fairfield Iowa");
console.log(`Address: ${Employee.getAddress()}`);