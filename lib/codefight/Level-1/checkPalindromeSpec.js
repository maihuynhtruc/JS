var checkPalindrome = require('./checkPalindrome');
describe('checkPalindrome', function(){
    it("should return correctly", function(){
        expect(checkPalindrome("aabaa")).toBe(true);
        expect(checkPalindrome("abac")).toBe(false);
        expect(checkPalindrome("a")).toBe(true);
        expect(checkPalindrome("az")).toBe(false);
        expect(checkPalindrome("abacaba")).toBe(true);
        expect(checkPalindrome("z")).toBe(true);
        expect(checkPalindrome("aaabaaaa")).toBe(false);
        expect(checkPalindrome("zzzazzazz")).toBe(false);
        expect(checkPalindrome("hlbeeykoqqqqokyeeblh")).toBe(true);
        expect(checkPalindrome("hlbeeykoqqqokyeeblh")).toBe(true);
    });
});

