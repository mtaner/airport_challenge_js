function Weather() {};

Weather.prototype = {
	isStormy: function() {
		return this._outlookSample();
	},

	_outlookSample: function() {
		var number = Math.random();
		if(number < 0.3) {
			return true;
		}
		else {
			return false;
		};
	}
};
