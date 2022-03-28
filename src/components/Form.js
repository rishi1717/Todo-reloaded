import React from "react"

const Form = (props) => {
    const inputHandler = (e)=>{
        console.log(e.target.value)
        props.setInput(e.target.value)
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        props.setTodos([...props.todos,{text: props.input, completed: false, id: Date.now()}])
        props.setInput('')
		// console.log(props.todos);
    }
	const categoryHandler=(e)=>{
		props.setCategory(e.target.value)
	}
	return (
		<form>
			<input value={props.input} onChange={inputHandler} type="text" className="todo-input" />
			<button onClick={submitHandler} className="todo-button" type="submit">
				<i className="fas fa-plus-square"></i>
			</button>
			<div className="select">
				<select onChange={categoryHandler} name="todos" className="filter-todo">
					<option value="all">All</option>
					<option value="completed">Completed</option>
					<option value="uncompleted">Uncompleted</option>
				</select>
			</div>
		</form>
	)
}

export default Form
