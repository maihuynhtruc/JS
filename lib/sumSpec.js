var sum = require('./sum');
describe('sum', function(){
    it("should return correctly", function(){
        expect(sum(2 , 3)).toBe(5);
     });
});
