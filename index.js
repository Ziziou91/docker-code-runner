//q1 {"function":{"arguments":"number","body":"return number * number"}}
//q2 {"function":{"arguments":"number","body":"et sum = 0;for(i=1; i<=number; i+=2) {sum += i;}return sum;"}}

//{"function":{"arguments":"number, n","body":"let counter = 0; for (i=0; i<number.length; i++) {if(number[i]=== n) counter--;}return counter;"}}
// following question format works      describe('hello world', function() {it('returns the square of 0', function(){Test.assertSimilar(a,1);}); });

const express = require('express');
const app = express();
const exec = require('child_process').exec;
const q = require('q');
const bodyParser = require('body-parser');


const PORT = 8080;

app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

app.post('/:question_id', (req, res) => {
    const question = req.params.question_id;
    let test = require(`./tests/${question}.js`).test;
    let solution = require(`./solutions/${question}.js`).solution;
    const f = new Function(req.body.function.arguments, req.body.function.body);
    runDocker(f, test, solution).then(function (response) {
        res.status(200).send(response);
    })
})

function runDocker(f, test, solution) {
    let defer = q.defer();
    setTimeout(function () {
        defer.resolve("I timed out!!");
    }, 10000)
    exec(`docker run --rm codewars/node-runner run -l javascript -c "let result = ${f}, ctrl = ${solution}" -t cw -f "${test}"`, function (error, stdOut, stdErr) {
        defer.resolve(JSON.stringify(arguments[1]));
    })
    return defer.promise;
}

// how long doe it run?
// what happens if we resolve twice

// for (var i = 1; i > 0; i++) {console.log('INFINATE LOOP!')}