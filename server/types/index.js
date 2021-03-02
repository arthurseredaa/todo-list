import { todoTypes } from "./Todo";

export const typeDefs = `
  type Query {
    todos: [Todo]
    todo(id: ID):Todo
  }

  type Mutation {
    createTodo(input: TodoInput): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, input: TodoInput): Todo
  }

  ${todoTypes}
`;
