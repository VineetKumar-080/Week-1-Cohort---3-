function greet(name){
    console.log("Hi " + user1.name + " your age is " + user1.age);
    
}

let user1 = {
    name: "Vineet",
    age: 22,
    gender : "Male",
}

// console.log(user1.name); // First way 
// console.log(user1["name"]); // Second way
// console.log(user1.age);

greet(user1)