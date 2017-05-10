import React, { Component } from 'react'

class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log(`Gonna add a new todo: ${this.newTodo.value}`)
    const newTodo = { text: this.newTodo.value }
		this.props.addTodo(newTodo)

    this.form.reset()
  }

  render() {
    return (
      <form ref={(input) => this.form = input} onSubmit={e => this.handleSubmit(e)}>
        <div className="form-group">
          <input ref={(input) => this.newTodo = input } type="text" className="form-control" placeholder="New todo..." />
        </div>
        <button type="submit" hidden>+ Add</button>
      </form>
    )
  }
}

export default AddTodo
