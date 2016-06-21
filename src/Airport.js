function Airport() {
  this.weather = new Weather();
};

Airport.prototype = {
  land: function(plane){
    if (this._stormStatus()){
      return 'Weather is too stormy!';
    }
    else {
      return 'Plane has landed';
    };
  },

  _stormStatus: function(){
    return this.weather.isStormy();
  }
};
