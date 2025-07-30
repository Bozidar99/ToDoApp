import React from 'react';

function TodoTask({ todoLists, setTodoLists }) {
  function handleDeleteTodo(id) {
    const updatedList = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(updatedList);
  }

  return (
    <div className="space-y-4">
      {todoLists.length > 0 ? (
        todoLists.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
          >
            <h3 className="text-lg font-medium text-gray-800">{todo.title}</h3>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Ukloni
            </button>
          </div>
        ))
      ) : (
        <h2 className="text-center text-gray-500 mt-6 text-lg">
          Lista zadataka je prazna
        </h2>
      )}
    </div>
  );
}

export default TodoTask;


