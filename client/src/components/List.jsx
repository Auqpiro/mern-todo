import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "../store/selectSlice";
import { useEditTodoMutation, useGetTodosQuery } from "../store/todosApi";
import Form from "./Form";
import Item from "./Item";

function List() {
  const selectedTodo = useSelector((state) => state.selected.todo);
  const dispatch = useDispatch();
  const { data: todos = [], isFetching, isLoading } = useGetTodosQuery();
  const [editTodo] = useEditTodoMutation();
  const onEdit = (id) => (body) => {
    if (body) editTodo({ id, body });
    dispatch(selectTodo(null));
  };
  if (isFetching || isLoading) {
    return <p>...loading</p>;
  }
  if (!todos.length) {
    return <p>no have todos</p>;
  }
  return (
    <div>
      <ul>
        {todos.map((todo) =>
          todo.id === selectedTodo?.id ? (
            <li key={todo.id}>
              <Form mode="edit" onSubmit={onEdit(todo.id)} />
            </li>
          ) : (
            <li key={todo.id}>
              <Item item={todo} />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default List;
