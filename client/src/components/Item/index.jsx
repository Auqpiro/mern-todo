import { useDispatch } from "react-redux";
import { selectTodo } from "store/selectSlice";
import { useDeleteTodoMutation } from "store/todosApi";
import Button from "components/Button";
import styles from "./item.module.css";

function Item({ item }) {
  const dispatch = useDispatch();
  const [deleteTodo] = useDeleteTodoMutation();
  const onPick = () => dispatch(selectTodo(item));
  const onDelete = () => deleteTodo(item.id);
  return (
    <article>
      <dl className={styles.body}>
        <dt className={styles.title}>
          <Button color="success" disabled={true}>
            {item.status.toUpperCase()}
          </Button>
          <span>{item.title.toUpperCase()}</span>
        </dt>
        <dd className={styles.description}>{item.description}</dd>
      </dl>
      <div className={styles.buttons}>
        <Button color="warning" onClick={onPick}>
          EDIT
        </Button>
        <Button color="danger" onClick={onDelete}>
          DELETE
        </Button>
      </div>
    </article>
  );
}

export default Item;
