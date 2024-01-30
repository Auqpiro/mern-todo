import Form from "components/Form";
import Item from "components/Item";
import { useSelector, useDispatch } from "react-redux";
import { selectTodo } from "store/selectSlice";
import { useEditTodoMutation, useGetTodosQuery } from "store/todosApi";
import styles from "./list.module.css";

function List() {
  const selectedTodo = useSelector((state) => state.selected.todo);
  const dispatch = useDispatch();
  const { data: todos = [] } = useGetTodosQuery();
  const [editTodo] = useEditTodoMutation();
  const onEdit = (id) => (body) => {
    if (body) editTodo({ id, body });
    dispatch(selectTodo(null));
  };
  if (!todos.length) {
    return <p>no have todos</p>;
  }
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todos.map((todo) =>
          todo.id === selectedTodo?.id ? (
            <li className={styles.item} key={todo.id}>
              <Form mode="edit" onSubmit={onEdit(todo.id)} />
            </li>
          ) : (
            <li className={styles.item} key={todo.id}>
              <Item item={todo} />
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default List;
