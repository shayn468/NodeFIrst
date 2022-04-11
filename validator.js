var validator = require('validator');
var  a = validator.isEmail('shayanejaz@gmail.com'); 
var b = validator.isEmail('shayan.com'); 

console.log(a);
console.log(b);

