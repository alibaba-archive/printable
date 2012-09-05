var should = require('should');
var pt = require('../');

var source;
describe('printable test', function() {
  describe('common print', function() {
    it('should print limit ok', function() {
      source = [['hello', 'world'], ['foo', 'bar']];
      var out = pt.print(source, '|', 10);
      out.should.equal('hello     |world     \nfoo       |bar       ');
    });

    it('should print unlimit ok', function() {
      var out = pt.print(source, '|')
      out.should.equal('hello|world\nfoo  |bar  ');
    });;

    it('should print limit cut ok', function() {
      var out = pt.print(source, ' | ', 3);
      out.should.equal('hel | wor\nfoo | bar');
    });

    it('should print border length ok',function() {
      var out = pt.print(source, 5);
      out.should.equal('hello     world\nfoo       bar  ');
    });

    it('should print chinese ok', function() {
      source = [['hello', 'world'], ['你好', '世界']];
      var out = pt.print(source, '|');
      out.should.equal('hello|world\n你好 |世界 ');
    });

    it('should cut chinese ok', function() {
      var out = pt.print(source, '|', 3);
      out.should.equal('hel|wor\n你 |世 ');
    });
  });
});