/**
 * lab10.js
 *
 */

import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

const persons = [
    new Person("Anna Smith", "1998-12-15"),
    new Person("Bob Jones", "1945-11-16"),
    new Person("Carlos Slim Helu", "1976-09-24"),
];
persons.forEach(a => console.log(a.toString()));

const employee = new Employee("Jim Hanson", null, "245,990.00", null);
employee.doJob("Software Engineer");

// testing the moduel access for the private varible

// console.log("========================")
// const nameModule = (function () {
//     const fname = {
//         fname: "Hridaya",
//         getName: function () { return this.fname }
//     }
//     const privateFunction = function () {
//         return fname.getName();
//     }
//     const publicFunction = function () {
//         return privateFunction();
//     }
//     return {
//         publicFunction: publicFunction
//     }
// }());
// console.log(nameModule.publicFunction());