import { useQuery, useMutation } from "@apollo/client";
import { GET_TODOS } from "@src/apollo/queries";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "./mutations";
import { GET_TODO } from "./queries";

// GET ALL TODOS
export const useGetTodos = () => useQuery(GET_TODOS);

// GET ONE TODO
export const useGetTodo = (id) => useQuery(GET_TODO, { variables: { id } });

// CREATE TODO
export const useCreateTodo = () =>
  useMutation(CREATE_TODO, {
    update: (cache, { data: { createTodo } }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });

      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, createTodo] },
      });
    },
  });

// DELETE TODO
export const useDeleteTodo = () =>
  useMutation(DELETE_TODO, {
    update: (cache, { data: { deleteTodo } }) => {
      const { todos } = cache.readQuery({ query: GET_TODOS });

      const newTodos = todos.filter((todo) => todo._id !== deleteTodo);

      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...newTodos] },
      });
    },
  });

// UPDATE TODO
export const useUpdateTodo = (id, input) =>
  useMutation(UPDATE_TODO, { variables: { id, input } });
