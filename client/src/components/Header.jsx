import { useAddTodoMutation } from "../store/todosApi";
import Form from "./Form";

function Header() {
  const [onAdd] = useAddTodoMutation();
  return (
    <div>
      <Form mode="add" onSubmit={onAdd}/>
    </div>
  );
}

export default Header;
