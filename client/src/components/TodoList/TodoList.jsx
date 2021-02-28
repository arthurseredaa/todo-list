import { useQuery, gql } from "@apollo/client"
import { TodoItem } from "../TodoItem/TodoItem";

const TODOS_QUERY = gql`
  query TodosQuery {
    todos {
      _id
      title
      description
      checked
      date
    }
  }
`;

export const TodoList = () => {
  const {error, data, loading} = useQuery(TODOS_QUERY);

  if(loading) return <h1>Loading...</h1>

  if(error) console.log(error);

  return (
    <div>
      <h1>Todo list</h1>
      <div>
        {data && data.todos.map(todo => <TodoItem key={todo._id} {...todo} />)}
      </div>
    </div>
  )
}
