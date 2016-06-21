describe('Plane', function(){
  var plane = new Plane();

  describe('#land', function(){
    it('confirms that the plane has landed', function(){
      plane.land();
      expect(plane.hasLanded).toBe(true);
    });
  });

  describe('#takeOff', function(){
    it('confirms that the plane has taken off', function(){
      plane.takeOff();
      expect(plane.hasLanded).toBe(false);
    });
  });
});
