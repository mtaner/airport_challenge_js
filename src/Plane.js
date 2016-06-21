function Plane(){
  this.planeStatus = false;
};

Plane.prototype = {
  hasLanded: function(){
    return this.planeStatus;
  },

  land: function(){
    this.planeStatus = true;
  }
}
