var cowsay = require('cowsay');
const newCowsay = module.exports = function(e){

  return cowsay.say ({
    text : e,
    e : 'oO',
    T : 'U'
  });
};
console.log(newCowsay('moo'));
