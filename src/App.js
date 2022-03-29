import React, { useState, useEffect } from "react"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
	const [input, setInput] = useState("")
	const [todos, setTodos] = useState([])
	const [category, setCategory] = useState("all")
	const [filter, setFilter] = useState([])

	useEffect(() => {
		getLocal()
	}, [])

	useEffect(() => {
		filterHandler()
    saveLocal()
	}, [todos, category])

  const filterHandler = () => {
		switch (category) {
			case "completed":
				setFilter(todos.filter((todo) => todo.completed === true))
				break
			case "incompleted":
				setFilter(todos.filter((todo) => todo.completed === false))
				break
			default:
				setFilter(todos)
		}
  }

	const saveLocal = () => {
		localStorage.setItem("todos", JSON.stringify(todos))
	}

	const getLocal = () => {
		if (localStorage.getItem("todos") === null)
			localStorage.setItem("todos", JSON.stringify([]))
		else {
			let localTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(localTodo)
		}
	}

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
			<TodoList filter={filter} setTodos={setTodos} todos={todos} />
		</div>
	)
}

export default App
