// const express = require('express')
const validator = require("validator");
const greeter = require('./greeter');

greeter('My name is Alexander!')

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);


// const app = express()

 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)