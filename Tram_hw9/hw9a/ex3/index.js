// Load the moment package as a module
const moment = require("moment");

// Format the current date
console.log(moment().format("dddd, MMMM Do YYYY"));

// COmpute the number of years since the specified date
console.log(moment("1976-11-26").fromNow());