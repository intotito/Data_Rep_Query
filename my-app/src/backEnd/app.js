const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 4000;
/*
* Javascript Object that will be sent to clients as JSON
*/



app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var data = {
    "books": [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ]
}


/*
* Service GET request from root page
*/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
* Service GET request from /datarep
*/
app.get('/datarep', (req, res) => {
    console.log(req.path);
    res.send('Welcome to Data Representation and Querying');
})
/*
* Service GET request redirected to /name
*/
app.get('/name', (req, res) => {
    console.log(req);
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})
/*
* Service POST request redirected to /name
*/
app.post('/name', (req, res) => {
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

/*
* Service POST requests directed to /api/book
*/

app.post('/api/book', (req, res)=>{
    console.log('Title: ' + req.body.title + ' Cover: ' + req.body.cover + ' Year: ' + req.body.year); // Display title, cover and year on the console
    res.send('Update completed Successfully!!'); // Send a message back to the client [for debugging]
})

/*
* Service GET request from /hello and echo back parameter
*/
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
/*
* Service GET request from /api/books and return a JSON version of 
* the object - data.
*/
app.get('/api/books', (req, res) => {
    res.json({ mybooks: data });
})
/*
* Service GET request from /test and send back a HTML file 'index.html'
*/
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
/*
* Start service by listening on a chosen port
*/
app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})