module.exports = {
    test : function (code, control) {
        describe("Square a Number", function(){
            it ('returns the square of 0', function(){
                console.log('returns the square of 0')
                Test.assertEquals(code(0), control(0));
            });
            it ('returns the square of 2', function(){
                Test.assertEquals(code(2), control(2));
            });
            it ('returns the square of 9', function(){
                Test.assertEquals(code(9), control(9));
            });
            it('returns the square of random number', () => {
                const randNum = Math.round(Math.random() * 100)
                Test.assertEquals(code(randNum), control(randNum));
            });
        });
    }
}