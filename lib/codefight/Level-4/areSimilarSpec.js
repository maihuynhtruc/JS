var areSimilar=require('./areSimilar');
describe('areSimilar', function(){
    it("should return correctly", function() {
        expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
        expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
        expect(areSimilar([1, 1, 4], [1, 2, 3])).toBe(false);
        expect(areSimilar([1, 2, 3], [1, 10, 2])).toBe(false);
        expect(areSimilar([2, 3, 1], [1, 3, 2])).toBe(true);
        expect(areSimilar([2, 3, 9], [10, 3, 2])).toBe(false);
        expect(areSimilar([4, 6, 3], [3, 4, 6])).toBe(false);
        expect(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
         [832, 998, 148, 570, 533, 561, 455, 147, 894, 279])).toBe(true);
        expect(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
            [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])).toBe(false);
        });
});
