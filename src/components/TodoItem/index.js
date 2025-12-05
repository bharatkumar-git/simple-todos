// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {listItem, deleteTodo} = props
  const {id, title} = listItem

  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [isChecked, setIsChecked] = useState(false)

  const onClickHandler = () => {
    deleteTodo(id)
  }

  const todoEditButtonHandler = () => {
    setEditing(prev => !prev)
  }

  return (
    <li className="list-item">
      <input
        onChange={event => setIsChecked(event.target.checked)}
        type="checkbox"
        htmlFor={id}
      />
      {editing ? (
        <input
          onChange={event => setNewTitle(event.target.value)}
          value={newTitle}
          className="todoItem-title-input-element"
        />
      ) : (
        <p className={isChecked ? 'checked-todo-text' : ''} id={id}>
          {newTitle}
        </p>
      )}
      <div>
        <button onClick={onClickHandler} className="button" type="button">
          Delete
        </button>
        <button
          onClick={todoEditButtonHandler}
          className="todoItem-edit-button"
          type="button"
        >
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>
    </li>
  )
}

export default TodoItem
