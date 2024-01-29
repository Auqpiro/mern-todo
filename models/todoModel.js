import mongoose from "mongoose";
import toJson from '@meanie/mongoose-to-json'

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['done', 'processing', 'pending'],
    required: true,
  }
},
  {
    timestamps: true,
  });

todoSchema.plugin(toJson);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
