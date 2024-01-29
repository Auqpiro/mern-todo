import Todo from "../models/todoModel.js";

const handleError = (res, error) => {
  res.status(500).json({ error: error.message });
};

const getTodos = (_, res) => {
  Todo
    .find({}, {title: 1, description: 1, status: 1})
    .sort({ updatedAt: -1 })
    .then((todos) => res.status(200).json(todos))
    .catch((err) => handleError(res, err));
};

const getTodo = (req, res) => {
  const { id } = req.params;
  Todo
    .findById(id, {title: 1, description: 1, status: 1})
    .then((todo) => res.status(200).json(todo))
    .catch((err) => handleError(res, err));
};

const createTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo
    .save({
      lean: true,
    })
    .then(({ id }) => Todo.findById(id, {title: 1, description: 1, status: 1}))
    .then((result) => res.status(201).json(result))
    .catch((err) => handleError(res, err));
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  Todo
    .findByIdAndDelete(id)
    .then(() => res.status(200).send())
    .catch((err) => handleError(res, err));
};

const editTodo = (req, res) => {
  const { id } = req.params;
  Todo
    .findByIdAndUpdate(id, req.body)
    .then(() => Todo.findById(id, {title: 1, description: 1, status: 1}))
    .then((result) => res.status(200).json(result))
    .catch((err) => handleError(res, err));
};

export {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  editTodo,
};
