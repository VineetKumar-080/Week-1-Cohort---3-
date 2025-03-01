function canvote(age){
    if(age>18){
        return true + " , you can vote"
    }else{
        return false + " , you can't vote motherfucker"
    }
}

let personFirstAge = canvote(12)
let personSecondAge = canvote(45)

console.log(personFirstAge);
console.log(personSecondAge);

