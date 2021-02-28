export const TodoItem = ({title, description, date, checked}) => {
  return (
    <div className="bg-blue-100 w-50 text-center">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Checked: {checked + ""}</p>
      {date}
    </div>
  )
}
