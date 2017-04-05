var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function () {

  var park;
  var dino1;
  var dino2;
  var dino3;

  beforeEach(function () {
    park = new Park();
    dino1 = new Dinosaur('Stegasaurus', 1);
    dino2 = new Dinosaur('Tyrannosaur', 3);
    dino3 = new Dinosaur('Brachiosaur', 2);
    dino4 = new Dinosaur('Tyrannosaur', 4);

  });

  it('should start with no dinosaurs', function () {
    assert.strictEqual(0, park.enclosure.length);
  });

  it('should be able to add a dino', function () {
    park.addDino(dino1);
    assert.strictEqual(1, park.enclosure.length);
  });

  it('should remove dinos of a particular type', function () {
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.addDino(dino4);
      park.removeType('Tyrannosaur');
      assert.strictEqual(2, park.enclosure.length);
  });

  it('should return offspring count greater than 2', function (){
      park.addDino(dino1);
      park.addDino(dino2);
      park.addDino(dino3);
      park.addDino(dino4);
      park.getOffspring(2);
      assert.strictEqual(park.enclosure.length, 2);
  })

})