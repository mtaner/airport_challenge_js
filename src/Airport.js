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
      plane.land();
      return 'Plane has landed';
    };
  },

	takeOff: function(plane){
		if(!this.terminal.includes(plane)) {
			return '404: Plane not found!';
		};

		if (this._stormStatus()){
			return 'Weather is too stormy!';
		}
		else {
			var index = this.terminal.indexOf(plane);
      plane.takeOff();
			delete this.terminal[index];
		};
	},

  _stormStatus: function(){
    return this.weather.isStormy();
  }
};


// check the terminal and the weather and depart plane accordingly
