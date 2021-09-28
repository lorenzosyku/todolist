import React, { useState, useEffect } from 'react';
import './Todos.css';
import Todo from "./Todo"
import * as FaIcons from 'react-icons/fa';
import FlipMove from 'react-flip-move';

function Todos() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    const temp = localStorage.getItem("todos")
    const storedTodos = JSON.parse(temp)
    if(storedTodos) {
      setTodos(storedTodos)
    }
  },[]);

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos",temp)
  }, [todos]);

  function handleSubmit(e){
    e.preventDefault();
    if(todo.length === 0) return;

    const newTodo ={
      id: new Date().getTime(),
      text: todo.charAt(0).toUpperCase() + todo.slice(1),
      complete: false
    }  

    setTodos([newTodo, ...todos]);
    setTodo('')
  }

  function deleteTodo(id){
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  function toggleComplete(id){
    const updatedTodos = [...todos].map((todo)=>{
      if(todo.id ===id){ 
        todo.complete = !todo.complete 
      }
      return todo; 
    })

    setTodos(updatedTodos)
  }

  function editTodo(id){
    if(editingText.length === 0) return;
    const updatedTodos= [...todos].map((todo)=>{
      if(todo.id === id){ 
        todo.text = editingText; 
      }
      
      return todo; 
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText('')
  }


  return (
    <div className="todo__list" >

    <h1 className="title">Now let's see, what's the plan for today?</h1>

      <form className="todo__form" onSubmit={handleSubmit}>
        <input className="todo__input"  type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        <button className="todo__btns" type="submit" ><FaIcons.FaPlus/></button>
      </form>


      <FlipMove typeName={null}>

          {todos.map(todo => (
            <Todo 
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete} 
            editTodo={editTodo}
            todoEditing={todoEditing}
            setTodoEditing={setTodoEditing}
            setEditingText={setEditingText}
            />
          ))}
         
      </FlipMove>

    </div>
  )
}

export default Todos;
