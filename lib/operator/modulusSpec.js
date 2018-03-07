var modulus = require('./modulus');
describe('modulus', function(){
    it("should return correctly", function(){
        expect(modulus(5, 2)).toBe(1);
    });
});
