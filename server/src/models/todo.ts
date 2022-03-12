import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: false,
    default: false
  }
}, {
  timestamps: true
})

export default model('Test-todo', schema)
