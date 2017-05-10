import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {
  render() {
    const { todos } = this.props.Todos

    return (
      <ul>
        {todos.map((todo, i) => <Todo key={i} todo={todo} />)}
      </ul>
    )
  }
}

export default Todos
