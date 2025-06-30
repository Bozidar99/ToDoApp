import React, { useState } from 'react'

function TodoInput(todoLists, setTodoLists) {

  const [currentTodo, setCurrentTodo] = useState("")

  function handleTodoInput(e) {
    setCurrentTodo(e.target.value)
    //console.log(e.target.value)
  }

  function handleAddTodo() {
    if(currentTodo){
      setTodoLists([...todoLists, {id: new Date().getTime(), title: currentTodo}])
      setCurrentTodo("")
    }else {
      alert("Please inter something...")
    }
    console.log(currentTodo)
  }

  return (
    <div>
      <div>
        <input type='text' placeholder="Insert todo..." className='textInput' value={currentTodo} onChange={(e) =>
          handleTodoInput(e)}/>
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
    </div>
  )
}

export default TodoInput
