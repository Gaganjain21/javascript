 // Dates

 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleTimeString());
 console.log(typeof myDate);

 let myCreatedDate = new Date(2025, 5 , 1, 5, 30)
 let myDate1 = new Date("12-01-1996")
 console.log(myCreatedDate.toLocaleString());
 console.log(myDate1.toLocaleString());

 let timeStamp = Date.now()

 console.log(timeStamp);
 
 
 console.log(Math.floor(Date.now()/1000));

 let myNewDate = new Date()
console.log(myNewDate);
console.log(myNewDate.getMonth()+1);
console.log(myNewDate.getDate());

// console.log(`Hello ${myNewDate.getDate()} and the time is`);

console.log(myNewDate.toLocaleString("default",{
    weekday: "long"
}))
 
 
 