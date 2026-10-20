// let myCreateDate = new Date("01-12-2026") 
// console.log(myCreateDate.toLocaleString());
let myCreatedDate = new Date("01-12-2026");

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMilliseconds());
console.log(newDate.getDay());
console.log(newDate.getTimezoneOffset());


newDate.toLocaleDateString('default', 
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });