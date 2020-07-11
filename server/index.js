//start up file within Node project is typically called index.js
//create express application 
//this syntax is common.js module (use this for server side imports)
//for client side imports, use "import" syntax
const express = require('express');
require('./services/passport');

const app = express(); //creates a new application that represents a running express app.  can have more than one.  route handlers will be registered with this app object.
require('./routes/authRoutes')(app); //require the authRoutes file and it returns the function with the app object
//Client ID and Client Secret are directly from Google's OAuth service.

//do pre-deployment checklist for heroku (steps 1 - 4)
//1. dynamically figure out what port to listen to on heroku
const PORT = process.env.PORT || 5000; //getting port environment variable from heroku right when app is being executed. setting as a constant.
    //if there is an environment variable that has been assigned by heroku, get that. if not, use 5000 (will ube 5000 when doing local development)
//2. tell heroku what version of node we want it to use
    //added versions to "engines" section in package.json
//3. specify a start script to tell heroku how to startup our server.
    //changed the "scripts" section in package.json to run this index.js script upon server start up.
//4. create .gitignore to make sure not to commit any of the dependecies that we installed.
    //instead, let heroku install all of our dependencies itself.
    //add "node_modules" to .gitignore file.

//this statement is express telling node that it wants to listen for traffic coming in on port 5000
app.listen(PORT); //go to localhost:5000/ in browser to receive the hi:there message

//go through heroku first time deployment steps.










