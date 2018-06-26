const exec = require('child_process').exec;
const q = require('q');

function runTest(f, test, solution) {
    let defer = q.defer();
    setTimeout(function () {
        defer.resolve("I timed out!!");
    }, 10000)
    exec(`docker run --rm codewars/node-runner run -l javascript -c "let result = ${f}, ctrl = ${solution}" -t cw -f "${test}"`, function (error, stdOut, stdErr) {
        defer.resolve(JSON.stringify(arguments[1]));
    })
    return defer.promise;
}

module.exports = runTest;