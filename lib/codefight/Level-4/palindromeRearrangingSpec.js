var palindromeRearranging= require('./palindromeRearranging');
describe('palindromeRearranging', function(){
    it("should return correctly", function(){
        expect(palindromeRearranging("aabb")).toBe(true);
        expect(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc")).toBe(false);
        expect(palindromeRearranging("abbcabb")).toBe(true);
        expect(palindromeRearranging("zyyzzzzz")).toBe(true);
        expect(palindromeRearranging("z")).toBe(true);
        expect(palindromeRearranging("zaa")).toBe(true);
        expect(palindromeRearranging("abca")).toBe(false);
    });
});
