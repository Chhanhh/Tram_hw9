// import circle module
const circleModule = require("./circle.js");

// call the functions in module
const radiusHere = 3;
const circumViaModule = circleModule.circumference(radiusHere);

const areaViaModule = circleModule.area(radiusHere);

// print output
console.log(`The circumference of a circle of radius ${radiusHere} is ${circumViaModule}\nIts area is ${areaViaModule}\n`);