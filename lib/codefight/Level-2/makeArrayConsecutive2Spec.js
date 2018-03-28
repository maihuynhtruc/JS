var makeArrayConsecutive2 = require('./makeArrayConsecutive2');
describe('makeArrayConsecutive2',function(){
    it("should return correctly", function(){
         expect(makeArrayConsecutive2([6,2,3,8])).toBe(3);
         expect(makeArrayConsecutive2([0, 3])).toBe(2);
         expect(makeArrayConsecutive2([5, 4, 6])).toBe(0);
         expect(makeArrayConsecutive2([6, 3])).toBe(2);
         expect(makeArrayConsecutive2([1])).toBe(0)
    });
});