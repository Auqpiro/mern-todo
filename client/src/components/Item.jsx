import { useDispatch } from "react-redux";
import { selectTodo } from "../store/selectSlice";
import { useDeleteTodoMutation } from "../store/todosApi";

function Item({ item }) {
  const dispatch = useDispatch();
  const [deleteTodo] = useDeleteTodoMutation();
  const onPick = () => dispatch(selectTodo(item));
  const onDelete = () => deleteTodo(item.id);
  return (
    <div>
      <dl>
        <dt><span>{item.status} - {item.title}</span></dt>
        <dd>{item.description}</dd>
      </dl>
      <button onClick={onPick}>edit</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
}

export default Item;
