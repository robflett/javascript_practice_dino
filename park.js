var Park = function () {
  this.enclosure = [];
}

Park.prototype = {

  addDino: function (dino) {
    this.enclosure.push(dino);
  },

  removeType: function (type) {

    for( i=this.enclosure.length -1; i>0; i--) {
      if( this.enclosure[i].type == type) this.enclosure.splice(i,1);
    }

  },

  getOffspring: function (number) {
    // for( i=this.enclosure.length -1; i>0; i--) {
    //   if( this.enclosure[i].offspring <= number) this.enclosure.splice(i);
    // }

    var result = this.enclosure.filter(function( item ) {
      return item.this.offspring == number;
    });
  }
}

module.exports = Park;