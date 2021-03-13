import { Todo } from "../database/models/Todo";

export const todoQueries = {
  todos: () => Todo.find({}),
  todo: (_, { id }) => Todo.findById(id),
};

export const todoMutations = {
  createTodo: (_, { input }) => {
    const todo = Todo.create(input);
    return todo;
  },
  deleteTodo: async (_, { id }) => {
    const deletedPortfolio = await Todo.findByIdAndDelete(id);
    return deletedPortfolio._id;
  },
  updateTodo: async (_, { id, input}) => {
    const updatedPortfolio = Todo.findByIdAndUpdate(id, input);
    return updatedPortfolio;
  },
};
