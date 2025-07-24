const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');
dotenv.config();
const errorHandler = require("./middlewares/errorHandler");


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/',(req,res) => {
    return res.json({message:"Welcome to node server"});
});

// Api Routes
app.use('/api', routes);

// Error handler
app.use(errorHandler);



module.exports = app;