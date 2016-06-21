describe('Plane', function(){
  var plane = new Plane();

  describe('#hasLanded', function(){
    it('confirms that the plane has landed', function(){
      plane.land();
      expect(plane.hasLanded()).toBe(true);
    });
  });
});
