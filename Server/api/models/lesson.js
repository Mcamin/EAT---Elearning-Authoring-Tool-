const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  description: String
});

module.exports = mongoose.model('Lesson',lessonSchema);

