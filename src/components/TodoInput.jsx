import { useRef, useState } from "react";
import { CATEGORIES } from "../constants";
import "./TodoInput.css";

export default function TodoInput({
  addTodo,
  category,
  setCategory,
}) {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (!text.trim()) return;

    addTodo(text);

    setText("");

    inputRef.current?.focus();
  };

  return (
    <div className="todo-input-card">

      <div className="todo-input-row">

        <input
          ref={inputRef}
          type="text"
          placeholder="اكتب مهمة جديدة..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <button onClick={handleSubmit}>
          +
        </button>

      </div>

      <div className="categories">

        {CATEGORIES.map((item) => (

          <button
            key={item.id}
            className={
              category === item.name
                ? "category active"
                : "category"
            }
            style={{
              borderColor: item.color,
              color:
                category === item.name
                  ? "#fff"
                  : item.color,
              background:
                category === item.name
                  ? item.color
                  : "transparent",
            }}
            onClick={() => setCategory(item.name)}
          >
            {item.name}
          </button>

        ))}

      </div>

    </div>
  );
}