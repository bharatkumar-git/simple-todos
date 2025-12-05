import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

// eslint-disable-next-line
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, userInput: ''}

  deleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(item => item.id !== id)
    this.setState({todosList: filteredList})
  }

  inputOnchangeHandler = event => {
    this.setState({userInput: event.target.value})
  }

  todoAddButtonHandler = () => {
    const {userInput} = this.state

    const trimmed = userInput.trim()
    if (!trimmed) return
    const parts = trimmed.split(' ')
    const maybeCount = parseInt(parts[parts.length - 1], 10)

    let title
    let count

    if (!Number.isNaN(maybeCount)) {
      count = maybeCount
      title = parts.slice(0, -1).join(' ')
    } else {
      title = trimmed
      count = 1
    }

    const newTodos = []
    for (let i = 0; i < count; i += 1) {
      newTodos.push({
        id: Date.now() + i,
        title,
      })
    }

    this.setState(prev => ({
      todosList: [...prev.todosList, ...newTodos],
      userInput: '',
    }))
    // newTodoId: prev.newTodoId + 1,
  }

  render() {
    const {todosList, userInput} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="simple-heading">Simple Todos</h1>
          <div className="todo-input-container">
            <input
              value={userInput}
              onChange={event => this.inputOnchangeHandler(event)}
              className="todo-input-element"
              placeholder="Add a Todo"
            />
            <button
              className="todo-add-button"
              onClick={this.todoAddButtonHandler}
              type="button"
            >
              Add
            </button>
          </div>
          <ul className="list-container">
            {todosList.map(item => (
              <TodoItem
                deleteTodo={this.deleteTodo}
                key={item.id}
                listItem={item}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
