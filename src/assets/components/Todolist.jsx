import React, { useState } from 'react'

const Todolist = () => {
    const[todos,setTodos] = useState([]);
    const[title,setTitle] = useState("");

    const handleSubmit = (e) =>{
       e.preventDefault();
       
       const newTodo ={
        id: Date.now(),
        title : title
       };
       setTodos([...todos, newTodo]);
       setTitle("");
    }

    const handleDelete = (id) =>{
      let data = todos.filter(item=> item.id !== id);
      setTodos(data); 
    }

  return (
    <div>
      <h2>Todo app</h2>
      <form action=""method='post' onSubmit={handleSubmit}>
        <label htmlFor=""></label>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} /> 
        <button type='submit'>Submit</button>
      </form>
      <ul>
            {todos.map((todo) => (
              <li className="todo-item" key={todo.id}>
                <span>{todo.title}</span>

                <button type="button" onClick={() => handleDelete(todo.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Todolist