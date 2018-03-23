var hello= require('./hello');
describe('hello',function(){
    it("should return correctly",function(){
        expect(hello("Hai")).toBe("Hello Hai");
        expect(hello("Mai")).toBe("Hello Mai");
    });
});