var shapeAreaFor = require('./shapeAreaFor');
describe('shapeAreaFor', function(){
    it("should return correctly", function(){
        expect(shapeAreaFor(7)).toBe(85);
        expect(shapeAreaFor(6)).toBe(61);
        expect(shapeAreaFor(4)).toBe(25);
        expect(shapeAreaFor(5)).toBe(41);
        expect(shapeAreaFor(1)).toBe(1);
        expect(shapeAreaFor(2)).toBe(5);
    });
});
