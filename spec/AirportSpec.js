describe('Airport', function(){
  var weather = jasmine.createSpyObj('weather', ['isStormy']);
  var airport;
  var plane = jasmine.createSpyObj('plane', ['land']);

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
});
