const userFields = `
  name: String!
  email: String!
  password: String!
`

export const userTypes = `
  type User {
    _id: ID!
    ${userFields}
  }

  input UserInput {
    ${userFields}
  }
`;
