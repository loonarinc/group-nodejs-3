const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "Нет описания"
  },
  status: {
    type: Number,
    default: 1,
  },
  userId: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('Task', taskSchema, 'tasks')