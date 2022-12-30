import { useState } from "react"
import { Todo } from "./Todo";
import '../todoApp.css';


export const TodoApp = () => {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  // function handleSubmit(event){
  //   event.preventDefault();
  //   setTitle("First Tarea");
  // }

  function handleChangeInput(event){
    setTitle(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    
    setTodos([...todos,newTodo])
    setTitle('');
  }

  function onUpdateTodo(id, newText){
    setTodos(todos.map(todo =>{
        if(todo.id === id){todo.title = newText};
        return todo;
    }))
  }

  function handleDelete(id){
    setTodos(todos.filter(todo => todo.id !== id));
      
  }

  return (
    <>
      <div className="todoContainer">
        <form action="" className="todoCreateForm" onSubmit={onSubmit}>
          <input onChange={handleChangeInput} value={title} type="text" className="todoInput"/>
          <input onClick={onSubmit} type="submit" value="Create Todo" className="buttonCreate"/>         
        </form>
        <div className="todosContainer">
          {todos.map((todo)=>
              <Todo key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDelete={handleDelete}  ></Todo>
          )}
          </div>
      </div>
    </>
  )
}
