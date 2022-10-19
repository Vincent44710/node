let identity = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I am ${identity.name} I come from ${identity.campus}`,
    e : "oO",
    T : "U "
}));

// or cowsay.think()