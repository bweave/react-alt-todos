import React, { Component } from 'react'

class Todo extends Component {
  render() {
    const { todo } = this.props

    return (<li key={todo.id}>{todo.text}</li>)
  }
}

export default Todo
