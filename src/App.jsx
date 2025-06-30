import TodoInput from "./component/TodoTask.jsx" 
import TodoTask from "./component/TodoInput.jsx"
import { useEffect, useState } from "react"


function App() {

  const [todoLists, setTodoLists] = useState([])

  useEffect(() => {
    console.log(todoLists)
}, [todoLists])
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold">TODO APP</h1>

        <TodoInput todoLists = {todoLists} setTodoLists = {setTodoLists}/>
        <TodoTask />
      </div>
    </div>
  )
}

export default App
