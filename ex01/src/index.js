var myPet = {
    species: "Puddle",
    name: "Arci",
    legs: 4,
    friends: ["Max", "Rodrigo"]
};


function myFunction(myObj){

    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction};