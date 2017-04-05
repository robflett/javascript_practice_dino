var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function() {
  var dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur('Brontosaurus', 2);
  });

  it('should have a name', function (){
    assert.strictEqual('Brontosaurus', dinosaur.type);
  });

  it('shoudl have a number of offspring', function () {
    assert.strictEqual(2, dinosaur.offspring);
  });

})