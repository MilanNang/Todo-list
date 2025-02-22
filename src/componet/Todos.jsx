import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../Fetures/Todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos); // Access todos from Redux state
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null); // Tracks the ID of the todo being edited
  const [input, setInput] = useState(""); // Stores the input value for editing

  // Handle enabling edit mode for a todo
  const handleEdit = (todo) => {
    setEditId(todo.id); // Set the current todo's ID to edit
    setInput(todo.text); // Populate the input with the current todo's text
  };

  // Handle saving the updated todo
  const handleSave = () => {
    if (input.trim()) {
      dispatch(updateTodo({ id: editId, text: input })); // Dispatch update with ID and new text
      setEditId(null); // Exit edit mode
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="todos-container">
      <h1 className="text-2xl font-bold mb-4 flex justify-center my-3">Todos</h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editId === todo.id ? (
              // Input field for editing mode
              <input
                type="text"
                className="w-full px-2 py-1 rounded border border-gray-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            ) : (
              // Display the todo text
              <div className="text-white flex-1">{todo.text}</div>
            )}

            <div className="actions flex gap-2">
              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

              {/* Update/Save button */}
              {editId === todo.id ? (
                <button
                  onClick={handleSave}
                  className="text-white bg-green-500 px-4 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-yellow-500 px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Update
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
