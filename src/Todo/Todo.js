import React, {forwardRef} from 'react';
import * as FaIcons from 'react-icons/fa';

const Todo = forwardRef(({ todo, editTodo, deleteTodo, toggleComplete, editingText, todoEditing, setTodoEditing, setEditingText}, ref) => {
  return (
    <div className="todo__row" ref={ref}>
      {todoEditing === todo.id ? (<input className="edit__input" type="text" onChange={(e)=>setEditingText(e.target.value)} value={editingText}/>) : 
      (todo.complete ? (<div className="todo__row completed" >{todo.text}</div>) : (<div className="todo__row" >{todo.text}</div>))}
              
      <div className="group__buttons">
        <button className="todo__btns" onClick={()=>deleteTodo(todo.id)}>< FaIcons.FaTrashAlt/></button>
  
        {todo.complete ? (<button className="todo__btns completed" onClick={()=>toggleComplete(todo.id)} ><FaIcons.FaCheck/></button>) : (<button className="todo__btns" onClick={()=>toggleComplete(todo.id)} ><FaIcons.FaCheck/></button>)}
  
        {todoEditing === todo.id ? (<button className="todo__btns" onClick={()=>editTodo(todo.id)}> < FaIcons.FaSignInAlt/></button>) : (<button className="todo__btns" onClick={()=>{setTodoEditing(todo.id)}}> < FaIcons.FaPen/></button>)}

      </div>
                 
              
    </div>
  )
})

export default Todo
