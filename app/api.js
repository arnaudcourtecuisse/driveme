
const mongoose = require('mongoose');

// config files
var db = require('../config/db');
mongoose.connect(db.url);


module.exports = (req,res) => {
  res.status(200).send('hello');
}