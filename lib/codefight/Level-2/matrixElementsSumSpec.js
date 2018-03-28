var matrixElementsSum = require('./matrixElementsSum');
describe('matrixElementsSum', function(){
    it("should return correctly", function(){
        expect(matrixElementsSum([[0,1,1,2],
            [0,5,0,0],
            [2,0,3,3]])).toBe(9);
        expect(matrixElementsSum([[1,1,1,0],
            [0,5,0,1],
            [2,1,3,10]])).toBe(9);
        expect(matrixElementsSum([[1,1,1],
            [2,2,2],
            [3,3,3]])).toBe(18);
        expect(matrixElementsSum([[0]])).toBe(0);
    });
});