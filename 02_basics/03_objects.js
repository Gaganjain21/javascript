// Singleton
// Object.create
// object literals
const mySym = Symbol("Key1")


const jsUser = {
    name: "Gagan",
    "full name" : "Gagan Jain",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "gagan@google,com",
    isLoogedIn: false,
    lastLogginDays: ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "gagan@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "gagan@vestir.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

