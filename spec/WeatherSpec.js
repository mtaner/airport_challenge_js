describe('Weather', function() {
	var weather = new Weather();

	describe('#isStormy', function() {
		it('should be stormy', function() {
			spyOn(Math, 'random').and.returnValue(0.1);
			expect(weather.isStormy()).toBe(true);
		});

		it('should not be stormy', function() {
			spyOn(Math, 'random').and.returnValue(0.9);
			expect(weather.isStormy()).toBe(false);
		});
	});
});
