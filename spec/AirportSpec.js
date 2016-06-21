describe('Airport', function(){
  var weather = jasmine.createSpyObj('weather', ['isStormy']);
  var airport;
  var plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);

	beforeEach(function(){
	airport	= new Airport(weather);
	});

  describe('#land', function(){
    it('lands the plane', function(){
      weather.isStormy.and.callFake(function(){
        return false;
      });

      expect(airport.land(plane)).toEqual('Plane has landed');
    });

    it('doesn\'t land a plane when stormy', function(){
      weather.isStormy.and.callFake(function(){
        return true;
      });

      expect(airport.land(plane)).toEqual('Weather is too stormy!');
    });

		it('adds the plane to the terminal', function(){
			weather.isStormy.and.callFake(function(){
				return false;
			});
			airport.land(plane);
			expect(airport.terminal.pop()).toEqual(plane);
		});
  });

	describe('#takeOff', function(){
		describe('if plane has landed', function(){
			beforeEach(function(){
				weather.isStormy.and.callFake(function(){
					return false;
				});
				airport.land(plane);
			});

			it('plane should take off when the weather is good', function(){
				airport.takeOff(plane);
				expect(airport.terminal.includes(plane)).toBe(false);
			});

			it('plane should not take off when stormy', function(){
				weather.isStormy.and.callFake(function(){
					return true;
				});
				expect(airport.takeOff(plane)).toEqual('Weather is too stormy!');
			});
		});

		describe('if plane has landed', function(){
			it('should not let the unexisting plane take off', function() {
				weather.isStormy.and.callFake(function(){
					return false;
				});
				expect(airport.takeOff(plane)).toEqual('404: Plane not found!');
			});
		});
	});
});
