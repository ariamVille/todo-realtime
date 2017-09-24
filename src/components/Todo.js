import React, { Component } from 'react';
import TodoItem from './TodoItem';

// static data ng todo items
const todos = [{
	name: 'Todo 1 123',
	completed: false
}, {
	name: 'Todo 2 zzz',
	completed: false
}, {
	name: 'Todo 3 sss',
	completed: false
}, ];

class Todo extends Component {
	render() {

		var todosTemplate = [];
		for ( var x in todos ) {
			var todo = todos[x];
			todosTemplate.push(<TodoItem todo={todo} />);
		}

		return (
			<div>
				{
					// pwede naman old loop dito
					// kaso hassle kasi mahaba
					//todos.map(todo => <TodoItem todo={todo} />)
					todosTemplate
				}
			</div>
		);
	}
}


export default Todo;