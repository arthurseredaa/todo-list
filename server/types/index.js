import { todoTypes } from "./Todo";

export const typeDefs = `
  type Query {
    todos: [Todo]
  }

  type Mutation {
    createTodo(input:TodoInput): Todo
  }

  ${todoTypes}
`;
