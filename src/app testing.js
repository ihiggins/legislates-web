const express = require('express');
const request = require('request');
app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000, function() {
console.log('Server running on port 3000.');
});
