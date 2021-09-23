var lion = {
    name : "Simba",
    legs : 4,
    tails : 1
};

function myFunction(parameter, value) {
    lion[parameter] = value;
    return lion;
}

myFunction("roar", "roar-roar");
module.exports = myFunction;