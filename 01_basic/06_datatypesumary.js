//primitive



// 7 type : string , number , boolean, null , undefined , symbol , BigInt


const isloggedIn = true
const outsidetemp = null
let userEmail;

const Id = Symbol('123')

const anotherId = Symbol('123')

console.log(Id === anotherId);

const Bignumber = 34353666n

console.log(Bignumber);


//refernce (non-primitive)

// array , object , function

const hero = ["salman", "ajay", "varun", "ritik"];

let myObj = {
    name: "chirag",
    age: 21,
};

console.log(hero);
console.log(myObj);


    // FUNCTION

    const myFunction =  function(){
        console.log("hello world")
    }

    console.log(typeof myFunction);


//**************stack(primitive)********  heap(non - primitive)************* */

let myYoutubename = "chiragthakor2005";
let myAnothername = "youtubename";
myAnothername = "ravithakor2005";

console.log(myYoutubename);
console.log(myAnothername);