var searchBracket2=require('./searchBracket2');
describe('searchBracket2', function(){
    it("should return correctly", function(){
        expect(searchBracket2("abc(de)f")).toBe(1);
        expect(searchBracket2("abcdef")).toBe(0);
        expect(searchBracket2("a(bcdefghijkl(mno)p)q")).toBe(2);
        expect(searchBracket2("abc(cba)ab(bac)c")).toBe(2);
        expect(searchBracket2("The ((quick (brown) (fox) jumps over the lazy) dog)")).toBe(4);
    });
});
