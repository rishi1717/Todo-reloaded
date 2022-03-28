import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map((todo) => (
					<Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} text={todo.text} />
				))}
			</ul>
		</div>
	)
}

export default TodoList
