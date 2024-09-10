// 1. write a js program to add an element into an array at last without using push operation

let arr = [5, 6, 7, 8];
let length = arr.length;
let newval = 34; //this value

arr[length] = newval; //length is used to get the size of the array; array index is starts from 0; the length starts from 1
console.log(arr);

// 2. write a js program to remove an element from an array at last without using pop operation

let arr1 = [3, 4, 5, 6, 7];

arr1.splice(arr.length - 1); //remove a last element arr length is:(5-1) ;splice() used to remove a element
console.log(arr1);

// 3. write a js program to include any special characters between two elements

let arr2 = [11, 22, 33, 44, 55, 66];

console.log(arr2[0] + ":" + arr2[1]); //o/p 11:22

console.log(arr2.join("-"));

// 4. Include all the employee details(EMPID, EMPNAME, EMPSALARY EMPDESIGNATION) Display any 3 objects

const employee_details = [
  {
    ID: 12,
    NAME: "Sakthivel",
    SALARY: 1200,
    DESIGNATION: "Software Engineer",
  },
  {
    ID: 18,
    NAME: "Ram",
    SALARY: 14000,
    DESIGNATION: "Marketing Manager",
  },
  {
    ID: 20,
    NAME: "Priyanka",
    SALARY: 14000,
    DESIGNATION: "Senior Analyst",
  },
];

console.log(employee_details[0]);

console.log(employee_details[0].ID);
console.log(employee_details[1].NAME);
console.log(employee_details[2].DESIGNATION);
