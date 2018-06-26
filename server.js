const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const questionRouter = require('./routes/question');


app.use(bodyParser.json());

app.use('/questions', questionRouter);

app.use('/*', (req, res) => {
    console.log('invalid url')
    res.status(404).send()
});

app.use((err, req, res, next) => {
    let path = req.url.split('/');
    //console.log(err);
    if(err.type === 'entity.parse.failed') return res.status(400).send({msg: 'parse failed. request is not a function'})
    
    
    // if(err.name === 'CastError') {return res.status(404).send({msg: `invalid ${path[2].slice(0,-1)} ID`});}
    // if(err.msg === 'invalid article ID') {return res.status(400).send({msg: err.msg});}
    // if(err.msg === 'invalid comment format') {return res.status(400).send({msg: err.msg});}
    next(err);
})


module.exports = app;
