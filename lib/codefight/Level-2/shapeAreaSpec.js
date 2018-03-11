var shapeArea = require('./shapeArea');
describe('shapeArea', function(){
    it("should return corredtly", function(){
        expect(shapeArea(2)).toBe(5);
        expect(shapeArea(3)).toBe(13);
        expect(shapeArea(1)).toBe(1);
        expect(shapeArea(5)).toBe(41);
    });
});