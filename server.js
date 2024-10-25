const express = require('express');
const app = express();
//using our package express
//executing by const app
const port = 4000;
//executing port at port 4000

//here defining what were listening for
//a htp request with a get method
//listen for the url root slash 
//req short for http request
//res short for http response
//send a http response with the text hello world
//adding a route parameter that returns hello [name]
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    const surname = req.params.surname;
    res.send(`Hello ${name} ${surname}`);
});

app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    //sending json back
   // res.json({ movies });
   res.status(200).json({ myMovies:movies });



});

//error handling to catch any server errors when the server is run
//will print out something is wrong if errors occur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//adding status code to the response
//res.status(201).json({ movies });
//server will sit there and listen for a htp request to come in
//server is sitting up and listening on the port we have defined here port 4000
//app.listen sets up serever to listen for a request
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});