const express = require('express');
const app = express();
const exec = require('child_process').exec;
const q = require('q');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

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

module.exports = app;
