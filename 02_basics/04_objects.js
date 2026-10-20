// const tinderUser = {
//     name: "Elon Musk",
//     age: 49,
//     isMarried: false,
// }

// console.log(tinderUser.name);
// console.log(tinderUser.age);
// console.log(tinderUser.isMarried);

// const person1 = {
//     name: "Elon Musk",
//     age: 49,
//     isMarried: false,
//     friends: ["Tom", "Jerry"],
// }

// console.log(person1.friends[0]);
// console.log(person1.friends[1]);

// const person = {
//     name: "Elon Musk",
//     age: 49,
//     isMarried: false,
//     friends: ["Tom", "Jerry"],
// }

// person.age = 50;
// person.isMarried = true;

// console.log(person.age);
// console.log(person.isMarried);

// const person = {
//     name: "Elon Musk",
//     age: 49,
//     isMarried: false,
//     friends: ["Tom", "Jerry"],
// }

// person["age"] = 50;
// person["isMarried"] = true;

// console.log(person["age"]);
// console.log(person["isMarried"]);

const regularUser = {
    email: "ravotgmail.com",
    fullName: {
        userFullName: {
            firstName: "chirag",
            lastName: "thakor"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName); 

// // users[1].email
// // console.log(tinderUser.friends[0]);

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));

console.log(regularUser.hasOwnProperty("email"));

const course = {
    name: "js in hindi",
    price: 999,
    courseInstructor: "chirag thakor"
}

// console.log(course.hasOwnProperty("price"));

const {courseInstructor} = course;
console.log(courseInstructor);

const nav = ["home", "about", "contact", "blog", "careers"];
const [first, second, third, fourth, fifth] = nav;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth); 

    