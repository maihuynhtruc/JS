var searchBracket=require('./searchBracket');
describe('searchBracket', function(){
    it("should return correctly", function(){
        expect(searchBracket("abc(de)f")).toBe(1);
        expect(searchBracket("abcdef")).toBe(0);
        expect(searchBracket("a(bcdefghijkl(mno)p)q")).toBe(2);
        expect(searchBracket("abc(cba)ab(bac)c")).toBe(2);
        expect(searchBracket("The ((quick (brown) (fox) jumps over the lazy) dog)")).toBe(4);
    });
});
