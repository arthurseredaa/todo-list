import { useDeleteTodo } from "@src/apollo/actions";

export const TodoItem = ({
  title,
  description,
  checked,
  _id,
  createdAt,
  handleShowModal,
}) => {
  const [deleteTodo, { deleting, deleteError }] = useDeleteTodo();

  if (deleteError) console.log("TodoItem delete", deleteError);

  return (
    <div className="p-4 lg:w-1/3 md:w-1/1">
      <div className="h-full bg-gray-100 bg-opacity-75 py-6 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {checked.toString()}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {title}
        </h1>
        <p className="leading-relaxed mb-3">{description}</p>
        <p className="text-xs text-gray-500">Created at: {createdAt}</p>
        <div className="flex justify-around items-center w-2/3 mx-auto mt-6">
          <button
            className="bg-red-500 hover:bg-red-600 transition-all rounded px-4 py-2 text-white"
            onClick={() => deleteTodo({ variables: { id: _id } })}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 transition-all rounded px-4 py-2 text-white"
            onClick={() => handleShowModal(_id)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
