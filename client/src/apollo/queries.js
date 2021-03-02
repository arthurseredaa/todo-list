import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query TodosQuery {
    todos {
      _id
      title
      description
      checked
      createdAt
    }
  }
`;

export const GET_TODO = gql`
  query TodoQuery($id: ID) {
    todo(id: $id) {
      title
      description
      checked
      createdAt
    }
  }
`;
