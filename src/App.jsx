import TodoInput from "./component/TodoInput.jsx";
import TodoTask from "./component/TodoTask.jsx";
import { useEffect, useState } from "react";

function App() {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {
    console.log(todoLists);
  }, [todoLists]);

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl p-6">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
          TODO APP
        </h1>
        <TodoInput todoLists={todoLists} setTodoLists={setTodoLists} />
        <TodoTask todoLists={todoLists} setTodoLists={setTodoLists} />
      </div>
    </div>
  );
}

export default App;
