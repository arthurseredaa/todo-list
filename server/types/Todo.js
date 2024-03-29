const todoFields = `
  title: String
  description: String
  checked: Boolean
  updatedAt: String
  createdAt: String
  user: ID
`;

export const todoTypes = `
  type Todo {
    _id: ID!
    ${todoFields}
  }

  input TodoInput {
    ${todoFields}
  }
`;
