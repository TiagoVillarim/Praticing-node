const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UseSchema = new Schema({
  email: { type: String, required: true, unique: true, lowerCase: true },
  password: { type: String, required: true, select: false },
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('use', UseSchema);

