module.exports = {
    solution : function(str,char) {
        let counter = 0;
        for(i=0; i<str.length; i++) {
            if(str[i]===char) counter++
        }
        return counter;
    }
}