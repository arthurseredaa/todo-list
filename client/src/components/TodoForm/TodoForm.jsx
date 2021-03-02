import { useState } from "react";
import { useCreateTodo } from "@src/apollo/actions";
import { useGetTodo } from "@src/apollo/actions";
import { useUpdateTodo } from "../../apollo/actions";

export const TodoForm = ({
  closeModal,
  isEdit,
  title,
  description,
  todoId,
  cancelEditMode,
}) => {
  const [formState, setFormState] = useState({
    title: title || "",
    description: description || "",
  });

  const [createTodo] = useCreateTodo();
  const { data, error, loading } = useGetTodo(todoId);
  const [updateTodo, {error: updateError}] = useUpdateTodo(todoId, {
    title: formState.title,
    description: formState.description,
  });

  if (data?.todo && formState.title.length === 0) {
    const { todo } = data;
    setFormState({
      ...formState,
      title: todo.title,
      description: todo.description,
    });
  }

  const handleInputChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = formState;
    if (title.length > 0 && description.length > 0) {
      if (isEdit) {
        updateTodo();
        cancelEditMode();
        closeModal(true);
      } else {
        createTodo({ variables: { title, description } });
        closeModal(true);
      }
    }
    setFormState({ title: "", description: "" });
  };

  if(updateError) console.log("TodoForm", updateError);
  if(error) console.log("TodoForm", error);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-around flex-col mx-auto w-full items-center h-80 bg-gray-100 px-10 rounded"
    >
      <p
        className="absolute top-6 right-7 cursor-pointer text-lg"
        onClick={() => {
          closeModal();
          cancelEditMode();
        }}
      >
        &#10005;
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formState.title}
            onChange={handleInputChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={formState.description}
            onChange={handleInputChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition-all rounded text-lg"
          >
            {isEdit ? "Update" : "Create"}
          </button>
        </>
      )}
    </form>
  );
};
