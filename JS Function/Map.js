//Map function return new array from aleardy existing array.

const users = [
    {firstName: "vishal", lastName: "Palode", age: 22},
    {firstName: "sanket", lastName: "pawar", age: 23},
    {firstName: "ronit", lastName: "waje", age: 22}
];

 const output = users.map((x)=> x.firstName + " " + x.lastName);
 console.log(output);