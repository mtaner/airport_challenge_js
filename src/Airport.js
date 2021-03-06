function Airport(weather, capacity) {
  this.weather = weather;
	this.terminal = [];
  this.capacity = capacity || 20;
};

Airport.prototype = {
  land: function(plane){
    if(this.terminal.length === this.capacity) {
			throw new TypeError('Terminal is full');
		};

    if (this._stormStatus()){
      throw new TypeError('Weather is too stormy!');
    }
    else {
			this.terminal.push(plane);
      plane.land();
      return 'Plane has landed';
    };
  },

	takeOff: function(plane){
		if(!this.terminal.includes(plane)) {
			throw new TypeError('404: Plane not found!');
		};

		if (this._stormStatus()){
			throw new TypeError('Weather is too stormy!');
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
