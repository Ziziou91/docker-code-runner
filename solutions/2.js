module.exports = {
    solution : function(number) {
        let sum = 0;
        for(i=1; i<=number; i+=2) {
            sum += i;
        }
        return sum;
    }
}