// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteTodo} = this.props
    const {title, id} = todoDetails

    const onDelete = () => {
      deleteTodo(id)
    }
    return (
      <li className="list-container">
        <p className="heading">{title}</p>
        <button type="button" onClick={onDelete} className="button">
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
