import alt from '../alt'
import TodoActions from '../actions/TodoActions'

class TodoStore {
	constructor() {
		this.todos = [
			{id: 1, text: 'Go to store'},
			{id: 2, text: 'Feed the dog'},
			{id: 3, text: 'Get some excercise'},
		]

		this.bindListeners({
			addTodo: TodoActions.addTodo,
			updateTodo: TodoActions.updateTodo,
		})
	}

	addTodo(newTodo) {
		console.log(`Gonna add a new todo to the store: ${newTodo}`)
		const todos = [...this.state.todos]
		newTodo.id = todos.length + 1
		todos.push(newTodo)
		this.setState({ todos })
	}

	updateTodo(todo) {
		this.setState({ todos: this.state.todos.concat(todo) })
	}
}

export default alt.createStore(TodoStore, 'TodoStore')
