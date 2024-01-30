import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

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
  const canSubmit =
    mode === "edit" && selectedTodo ? !(isValid && isDirty) : !isValid;
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>
          title
          <input
            type="text"
            placeholder="title"
            {...register("title", {
              required: "required",
            })}
          />
        </label>
        <p>{errors?.title && (errors.title.message ?? "error")}</p>
      </div>
      <div>
        <label>
          description
          <input
            type="text"
            placeholder="description"
            {...register("description", {
              required: "required",
            })}
          />
        </label>
        <p>{errors?.description && (errors.description.message ?? "error")}</p>
      </div>
      <div>
        <label>
          status
          <select
            {...register("status", {
              required: "required",
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
      {mode === "edit" ? (
        <>
          <button type="submit" disabled={canSubmit}>save</button>
          <button onClick={cancelHandler}>cancel</button>
        </>
      ) : (
        <>
          <button type="submit" disabled={canSubmit}>add</button>
        </>
      )}
    </form>
  );
}

export default Form;
