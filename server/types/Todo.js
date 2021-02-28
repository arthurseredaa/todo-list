const todoFields = `
  title: String
  description: String
  date: String
  checked: Boolean
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
