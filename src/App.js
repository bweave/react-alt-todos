import React, { Component } from 'react'
import AltContainer from 'alt-container'
import TodoActions from './actions/TodoActions'
import TodoStore from './stores/TodoStore'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
			<AltContainer stores={{Todos: TodoStore}} actions={TodoActions}>
				<AddTodo />
				<Todos />
			</AltContainer>
    );
  }
}

export default App;
