describe('Airport', function(){
  var capacity = 2;
  var weather = jasmine.createSpyObj('weather', ['isStormy']);
  var airport;
  var plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);

	beforeEach(function(){
	airport	= new Airport(weather, capacity);
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

			var land = function() {
				airport.land(plane)
			};

			expect(land).toThrowError('Weather is too stormy!');
    });

		it('adds the plane to the terminal', function(){
			weather.isStormy.and.callFake(function(){
				return false;
			});
			airport.land(plane);
			expect(airport.terminal.pop()).toEqual(plane);
		});

    it('doesn\'t land a plane when the terminal is full', function(){
      weather.isStormy.and.callFake(function(){
        return false;
      });

      for(var i = 0; i < capacity; i++) {
        airport.land(plane);
      };

			var land = function() {
				airport.land(plane)
			};

      expect(land).toThrowError("Terminal is full");
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

				var takeOff = function() {
					airport.takeOff(plane)
				};

				expect(takeOff).toThrowError('Weather is too stormy!');
			});
		});

		describe('if plane has landed', function(){
			it('should not let the unexisting plane take off', function() {
				weather.isStormy.and.callFake(function(){
					return false;
				});

				var takeOff = function() {
					airport.takeOff(plane)
				};

				expect(takeOff).toThrowError('404: Plane not found!');
			});
		});
	});
});
