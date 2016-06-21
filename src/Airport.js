function Airport(weather) {
  this.weather = weather;
	this.terminal = [];
};

Airport.prototype = {
  land: function(plane){
    if (this._stormStatus()){
      return 'Weather is too stormy!';
    }
    else {
			this.terminal.push(plane);
      return 'Plane has landed';
    };
  },

  _stormStatus: function(){
    return this.weather.isStormy();
  }
};
