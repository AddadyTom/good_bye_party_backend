var questions = require('./questions');
questions = questions.questions
const cors = require('cors');


var express = require('express');
var app = express();
var index = 0;

app.use(cors());


function get_current_state() {
    return {...questions[index], current_index: index + 1}
}

app.get('/questions/current', function (req, res) {
    console.log(questions[index])
    res.send(get_current_state());
    index = (index + 1) % questions.length;
})


app.get('/questions/amount', function (req, res) {
    res.send(JSON.stringify(questions.length));
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log(questions)
   console.log("Example app listening at http://%s:%s", host, port)
})