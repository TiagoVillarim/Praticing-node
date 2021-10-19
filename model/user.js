const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UseSchema = new Schema({
  email: { type: String, required: true, unique: true, lowerCase: true },
  password: { type: String, required: true, select: false },
  created: { type: Date, default: Date.now }
});

UseSchema.pre('save', async function (next) {
  let user = this;
  if (!user.isModified('password')) return next();

  user.password = await bcrypt.hash(user.password, 10);
  return next();
});


module.exports = mongoose.model('use', UseSchema);

