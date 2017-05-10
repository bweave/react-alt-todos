import alt from '../alt'

class TodoActions {
  addTodo(newTodo) {
    return newTodo
  }
  
  updateTodo(id, text) {
    return { id, text }
  }
}

export default alt.createActions(TodoActions)
