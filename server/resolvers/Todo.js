import { Todo } from "../database/models/index";

export const todoQueries = {
  todos: (root, args, ctx) => Todo.find({}),
};

export const todoMutations = {
  createTodo: async (root, { input }, ctx) => {
    console.log(root);
    const todo = Todo.create(input);
    return todo;
  },
};
