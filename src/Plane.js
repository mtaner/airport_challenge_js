function Plane(){
  this.hasLanded = false;
};

Plane.prototype = {
  land: function(){
    this.hasLanded = true;
  },

  takeOff: function(){
    this.hasLanded = false;
  }
}
