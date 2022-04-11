var moment = require('moment');
var colors = require('colors');


console.log(moment().startOf('day').fromNow().green);

console.log(moment().subtract(1, 'days').calendar().red); 