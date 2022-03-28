import React, { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
	const [input, setInput] = useState("")
	const [todos, setTodos] = useState([])
	const [category, setCategory] = useState("all")
	// const [filter, setFilter] = useState([])
	return (
		<div className="App">
			<header>
				<h2>To-Do</h2>
			</header>
			<Form
				input={input}
				setInput={setInput}
				todos={todos}
				setTodos={setTodos}
				setCategory={setCategory}
			/>
			<TodoList setTodos={setTodos} todos={todos} />
		</div>
	)
}

export default App
