'use strict'

const app = require('./app')

app.listen(3000, function(){
	console.log("listening on port {0}!".format(3000));
});
