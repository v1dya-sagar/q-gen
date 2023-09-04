const express = require('express');
const ENV = require('dotenv');
const bodyparser = require('body-parser');

const taskRoute = require('./route/taskRoutes.js');


const app = express();
ENV.config();

let port = process.env.PORT;

app.use(bodyparser.json());
app.use('/', taskRoute.route);

app.listen(port,()=>{
    console.log(`Listening at ${port}....`)
})