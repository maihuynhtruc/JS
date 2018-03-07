var sub = require('./sub');
describe("sub",function(){
    it('should return correctly',function(){
        expect(sub(3,1)).toBe(2);
    });
});