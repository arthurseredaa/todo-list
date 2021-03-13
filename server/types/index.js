import { todoTypes } from "./Todo";
import { userTypes } from "./User";

export const typeDefs = `
  type Query {
    todos: [Todo]
    todo(id: ID):Todo
  }

  type Mutation {
    createTodo(input: TodoInput): Todo
    deleteTodo(id: ID): String
    updateTodo(id: ID, input: TodoInput): Todo
    createUser(input: UserInput): User
  }

  ${todoTypes}

  ${userTypes}
`;
