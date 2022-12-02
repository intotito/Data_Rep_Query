const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = 4000;

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.qwjlitc.mongodb.net/?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
} ``

const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});

const bookModel = mongoose.model('Books', bookSchema);



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

app.post('/api/book', (req, res) => {
    console.log('Title: ' + req.body.title + ' Cover: ' + req.body.cover + ' Author: ' + req.body.author); // Display title, cover and year on the console
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    });
    res.send('Update completed Successfully!!'); // Send a message back to the client [for debugging]
})

/*
* Service GET request from /hello and echo back parameter
*/
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
/*
* Service GET request from /api/books that fetches
* data from MongoDB Collection 'bookModel'
*/
app.get('/api/books', (req, res) => {
    bookModel.find((err, data)=>{
        res.json(data)
    })
//    res.json({ mybooks: data });
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

/*
* Service GET request from /api/book supplying a unique id as parameter
*/
app.get('/api/book/:id', (req,res)=>{
    console.log(req.params.id);
    bookModel.findById(req.params.id, (error, data) =>{
        console.log(data);
        res.json(data);
    });
//    bookModel.find({_id:req.params.id});
 //   res.send('data');
})

/*
* Service PUT request from clients to update attributes of a book
*/
app.put('/api/book/:id', (req, res) => {
    console.log("Update: " + req.params.id, req.body);
    bookModel.findByIdAndUpdate(req.params.id, req.body, //, {new:true} ** This stopped my program from working until i removed them not sure where it came from ***
    (error,data)=>{
        if(error){
            console.log(error)
        } else {
            console.log("update successful: ", data);
            res.send(data);
        }
        
    })
})

