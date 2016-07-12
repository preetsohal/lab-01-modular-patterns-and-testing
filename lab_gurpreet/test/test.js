const expect = require('chai').expect;
const newCowsay = require('../lib/index');
const cowsay = require('cowsay');
describe('the greet function', function() {
  describe('#parse()', function(){
    it('should greet the world', function() {
      expect(newCowsay('moo')).to.eql(cowsay.say({
        text : 'moo',
        e : 'oO',
        T : 'U'
      }));
    });
  });
});
