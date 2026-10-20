// singleton object
// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// person.greet(); // Output: Hello, my name is John       
// *********object literls  
const person = {
    name: "chirag",
    age: 21,
    location: "khambhat",
    isloggedin: true,
    email: "chirag@example.com",
    lastLoginDays: ["monday", "tuesday", "saturday"],
    score: [1, 2, 3, 4, 5],
    address: {
        street: "123 Main St",
        city: "khambhat",
        state: "gujarat"

    }
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.location);
// console.log(person.isloggedin);
// console.log(person["email"]);
// console.log(person.lastLoginDays);
// console.log(person.score);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.state);
person.email = "chiragthakor626@gmail.com";
console.log(person.email);