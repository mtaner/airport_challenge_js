describe('Weather', function() {
	var weather = new Weather();



	describe('#isStormy', function() {

		it('should be stormy', function() {

				Math = {
					random: function() {
						return 0.1;
					}
				};

			expect(weather.isStormy()).toBe(true);

		});

		it('should not be stormy', function() {

			Math = {
				random: function() {
					return 0.9;
				}
			};

			expect(weather.isStormy()).toBe(false);

		});

	});


});
