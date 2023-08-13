// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const authenticate = require('../authenticate');
const Comments = require('../models/comments');

// Create router
const commentRouter = express.Router();

// Use body parser to parse JSON body
commentRouter.use(bodyParser.json());

// Route for /comments
commentRouter.route('/')
    // CORS
    .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
    // GET
    .get(cors.cors, (req, res, next) => {
        // Find all comments
        Comments.find(req.query)
            // Populate author field in comment
            .populate('author')
            })
