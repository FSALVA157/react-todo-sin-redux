import { useState } from "react"


export const Todo = ({todo, onUpdateTodo, onDelete}) => {
const [isEdit, setIsEdit] = useState(false);

const handleClick = (event) => {
    setIsEdit(true);
}



function EditComponent(){
    const [newValue, setNewValue] = useState(todo.title)

    function handleSubmit(event) {
        event.preventDefault();
    
    }

    function handleChange(event) {
        event.preventDefault();
        setNewValue(event.target.value);
    }

    function handleClickUpdate(event){
        event.preventDefault();
        onUpdateTodo(todo.id, newValue)

        setIsEdit(false)
    }

    return (
        <div>
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input value={newValue} onChange={handleChange} type="text" className="todoInput"></input>
                <button
                  type="button"
                  onClick={handleClickUpdate}
                >Update</button>
            </form>
        </div>
    )
}

function TodoComponent(){
    return (
        <div className="todoInfo">
            <span className="todoInfo">{todo.title}</span>
            
            <button
                onClick={handleClick}
                className="button"
                >Editar</button>
            <button className="buttonDelete" onClick={(e)=>onDelete(todo.id)}>Delete</button>
    </div>
    )
}

  return (
    <>
     <div className="todo">
        {
         (isEdit)? <EditComponent/> : <TodoComponent/>          
           
                    }
     </div>
    
    </>
  )
}
