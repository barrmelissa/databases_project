
// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..')));
const buildPath = path.resolve(__dirname, '..', 'build');
app.get('*', (req, res) => {

	console.log(path.join(buildPath, requested));
	res.sendFile(path.join(buildPath, requested));	
});

module.exports = app;
