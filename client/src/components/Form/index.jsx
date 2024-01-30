import Button from "components/Button";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styles from "./form.module.css";

const options = ["done", "processing", "pending"];

function Form({ mode, onSubmit }) {
  const selectedTodo = useSelector((state) => state.selected.todo);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      status: "",
    },
  });
  useEffect(() => {
    if (mode === "edit" && selectedTodo) {
      reset({
        title: selectedTodo.title,
        description: selectedTodo.description,
        status: selectedTodo.status,
      });
    }
  }, [mode, reset, selectedTodo]);
  const submitHandler = (body) => {
    onSubmit(body);
    reset();
  };
  const cancelHandler = () => onSubmit(null);
  const canNotSubmit =
    mode === "edit" && selectedTodo ? !(isValid && isDirty) : !isValid;
  return (
    <form className={styles.container} onSubmit={handleSubmit(submitHandler)}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label>
            title
            <input
              type="text"
              placeholder="title"
              {...register("title", {
                required: true,
              })}
            />
          </label>
          <p>{errors?.title && (errors.title.message ?? "error")}</p>
        </div>
        <div className={styles.field}>
          <label>
            status
            <select
              {...register("status", {
                required: true,
              })}
            >
              <option value="" disabled hidden selected>
                select status
              </option>
              {options.map((option) => (
                <option
                  key={option}
                  value={option}
                  selected={
                    mode === "edit" &&
                    selectedTodo &&
                    selectedTodo.status === option
                  }
                >
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className={styles.field}>
        <label>
          description
          <textarea
            rows={1}
            placeholder="description"
            {...register("description", {
              required: true,
            })}
          />
        </label>
        <p>{errors?.description && (errors.description.message ?? "error")}</p>
      </div>
      {mode === "edit" ? (
        <div className={styles.buttons}>
          <Button
            color={canNotSubmit ? "secondary" : "success"}
            type="submit"
            disabled={canNotSubmit}
          >
            SAVE
          </Button>
          <Button color="primary" onClick={cancelHandler}>
            CANCEL
          </Button>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Button
            color={canNotSubmit ? "secondary" : "primary"}
            type="submit"
            disabled={canNotSubmit}
          >
            ADD
          </Button>
        </div>
      )}
    </form>
  );
}

export default Form;
