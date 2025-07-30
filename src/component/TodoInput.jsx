import React, { useState } from 'react';

function TodoInput({ todoLists, setTodoLists }) {
  const [currentTodo, setCurrentTodo] = useState("");

  function handleTodoInput(e) {
    setCurrentTodo(e.target.value);
  }

  function handleAddTodo() {
    if (currentTodo.trim()) {
      setTodoLists([
        ...todoLists,
        { id: new Date().getTime(), title: currentTodo.trim(), done: false }
      ]);
      setCurrentTodo("");
    } else {
      alert("Molim vas unesite nesto...");
    }
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="flex w-full gap-4">
        <input
          className="flex-1 rounded-xl border border-gray-300 p-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Unesi novi zadatak..."
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition duration-200"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

export default TodoInput;


