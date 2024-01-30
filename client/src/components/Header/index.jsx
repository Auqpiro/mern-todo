import Form from "components/Form";
import { useAddTodoMutation } from "store/todosApi";
import styles from "./header.module.css";

function Header() {
  const [onAdd] = useAddTodoMutation();
  return (
    <section className={styles.container}>
      <Form mode="add" onSubmit={onAdd} />
    </section>
  );
}

export default Header;
