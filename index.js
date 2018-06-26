//q1 {"function":{"arguments":"number","body":"return number * number"}}
//q2 {"function":{"arguments":"number","body":"let sum = 0;for(i=1; i<=number; i+=2) {sum += i;}return sum;"}}
//q3 {"function":{"arguments":"str, char","body":"let counter = 0;for(i=1; i<=str.length; i++) {if (str[i] === char) counter++;}return counter;"}}

// following question format works      describe('hello world', function() {it('returns the square of 0', function(){Test.assertSimilar(a,1);}); });

"use strict"

const app = require('./server');

const PORT = 8080;

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// how long doe it run?
// what happens if we resolve twice

// for (var i = 1; i > 0; i++) {console.log('INFINATE LOOP!')}