var reverseParentheses=require('./reverseParentheses');
describe('reverseParentheses', function(){
    it("should return correctly", function(){
        expect(reverseParentheses("a(bc)de")).toEqual("acbde");
        expect(reverseParentheses("a(bcdefghijkl(mno)p)q")).toEqual("apmnolkjihgfedcbq");
        expect(reverseParentheses("co(de(fight)s)")).toEqual("cosfighted");
        expect(reverseParentheses("Code(Cha(lle)nge)")).toEqual("CodeegnlleahC");
        expect(reverseParentheses("Where are the parentheses?")).toEqual("Where are the parentheses?");
        expect(reverseParentheses("abc(cba)ab(bac)c")).toEqual("abcabcabcabc");
        expect(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"))
            .toEqual("The god quick nworb xof jumps over the lazy");
    });
});

