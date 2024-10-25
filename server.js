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
app.get('/', (req, res) => {
    res.send('Hello to Data Representation & Querying');
});

//error handling to catch any server errors when the server is run
//will print out something is wrong if errors occur
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

//server will sit there and listen for a htp request to come in
//server is sitting up and listening on the port we have defined here port 4000
//app.listen sets up serever to listen for a request
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});