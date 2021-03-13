import { TodoItem } from "@/TodoItem/TodoItem";
import { useGetTodos } from "@src/apollo/actions";

export const TodoList = ({ handleShowModal }) => {
  const { error, data, loading } = useGetTodos();

  if (error) console.log("TodoList", error);

  return (
    <div>
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="w-50 mx-auto flex justify-start flex-wrap">
          {data &&
            data.todos.map((todo) => (
              <TodoItem key={todo._id} {...todo} handleShowModal={handleShowModal} />
            ))}
        </div>
      )}
    </div>
  );
};
