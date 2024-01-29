import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  editTodo,
} from "../controller/todoController.js";

const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodo);

router.post('/', createTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', editTodo);

export default router;
