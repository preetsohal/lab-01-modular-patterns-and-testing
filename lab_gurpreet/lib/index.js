var cowsay = require('cowsay');
const newCowsay = module.exports = function(a){

  return cowsay.say ({
    text : a,
    e : 'oO',
    T : 'U'
  });
};
console.log(newCowsay('moo'));
