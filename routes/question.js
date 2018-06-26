const router = require('express').Router();
const runTest = require('../runtest');

router.post('/:question_id', (req, res) => {
    const question = req.params.question_id;
    let test = require(`../tests/${question}.js`).test;
    let solution = require(`../solutions/${question}.js`).solution;
    const f = new Function(req.body.function.arguments, req.body.function.body);
    runTest(f, test, solution).then(function (response) {
        res.status(200).send(response);
    })
})

module.exports = router;