// Write your code here
import './index.css'

const TodoItem = props => {
  const {listItem, deleteTodo} = props
  const {id, title} = listItem

  const onClickHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <button onClick={onClickHandler} className="button" type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
