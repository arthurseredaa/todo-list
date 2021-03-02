import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String, $description: String) {
    createTodo(input: {title: $title, description: $description}) {
      _id
      title
      description
      checked
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID) {
    deleteTodo(id: $id)
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID, $input: TodoInput) {
    updateTodo(id: $id, input: $input) {
      _id
      title
      description
      checked
      createdAt
    }
  }
`;
