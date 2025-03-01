function greet(user) {
    if (user.gender === "Male") {
        console.log("Hi Mr. " + user.name + ", your age is " + user.age);
    } else if (user.gender === "Female") {
        console.log("Hi Ms. " + user.name + ", your age is " + user.age);
    } else {
        console.log("Hi " + user.name + ", your age is " + user.age);
    }
}

let user = {
    name: "Vineet",
    age: 22,
    gender: "Male",
};

greet(user);
