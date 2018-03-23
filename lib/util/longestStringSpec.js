var longestString = require('./longestString');
describe('longestString', function(){
    it("should return correctly", function(){
        expect(longestString(["aba",
            "aa",
            "ad",
            "vcd",
            "aba"])).toEqual(["aba"]);
        expect(longestString(["aa"])).toEqual(["aa"]);
        expect(longestString(["abc",
            "eeee",
            "abcd",
            "dcd"])).toEqual(["abcd"]);
        expect(longestString(["a",
            "abc",
            "cbd",
            "zzzzzz",
            "a",
            "abcdef",
            "asasa",
            "aaaaaa"])).toEqual(["aaaaaa"]);
    });
});
