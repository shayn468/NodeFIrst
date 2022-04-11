const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'myPassword';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
   console.log(myPlaintextPassword);
   console.log(hash);
   
});

