var allLongestStrings = require('./allLongestStrings');
describe('allLongestStrings', function(){
    it("should return corredtly", function(){
        // return allLongestStrings(["aba",
        //     "aa",
        //     "ad",
        //     "vcd",
        //     "aba"]);
        var t= allLongestStrings(["aba",
            "aa",
            "ad",
            "vcd",
            "aba"]);
        console.log(t);
        expect(t).toEqual(["aba",
            "vcd",
            "aba"]);
        // expect(allLongestStrings(["aa"])).toEqual(["aa"]);
        // expect(allLongestStrings(["abc",
        //     "eeee",
        //     "abcd",
        //     "dcd"])).toEqual(["eeee",
        //     "abcd"]);
        // expect(allLongestStrings(["a",
        //     "abc",
        //     "cbd",
        //     "zzzzzz",
        //     "a",
        //     "abcdef",
        //     "asasa",
        //     "aaaaaa"])).toEqual(["zzzzzz",
        //     "abcdef",
        //     "aaaaaa"]);
    });
});
