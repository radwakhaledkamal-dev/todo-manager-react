import { useState, useRef, useEffect } from "react";
import "./TodoItem.css";

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.text);

  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const saveEdit = () => {
    if (!value.trim()) return;

    editTodo(todo.id, value);
    setEditing(false);
  };

  return (
    <div className={'todo-item $>{todo.completed ? "completed" : ""}'}>

      <button>
        className="check-btn";
        onClick={() => toggleTodo(todo.id)}
      
        {todo.completed ? "✓" : ""}
      </button>

      <div className="todo-content">

        {editing ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={saveEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
            }}
            className="edit-input"
          />
        ) : (
          <>
            <h3>{todo.text}</h3>

            <small>
              {todo.category} •{" "}
              {new Date(todo.createdAt).toLocaleDateString("ar-EG")}
            </small>
          </>
        )}

      </div>

      {!todo.completed && (
        <button
          className="edit-btn"
          onClick={() => setEditing(true)}
        >
          ✏️
        </button>
      )}

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑
      </button>

    </div>
  );
}