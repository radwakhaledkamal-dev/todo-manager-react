import "./App.css";

import useTodos from "./hooks/useTodos";

import ProgressRing from "./components/ProgressRing";
import TodoInput from "./components/TodoInput";
import FilterBar from "./components/FilterBar";
import TodoItem from "./components/TodoItem";

export default function App() {
  const {
    todos,
    filteredTodos,
    search,
    setSearch,
    filter,
    setFilter,
    category,
    setCategory,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    clearCompleted,
    completedCount,
    activeCount,
    progress,
  } = useTodos();

  return (
    <div className="app">

      <div className="container">

        <h1>✨ Todo Manager</h1>

        <ProgressRing
          progress={progress}
          completed={completedCount}
          total={todos.length}
        />

        <TodoInput
          addTodo={addTodo}
          category={category}
          setCategory={setCategory}
        />

        <FilterBar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        <div className="stats">
          <div>
            <h2>{todos.length}</h2>
            <p>الكل</p>
          </div>

          <div>
            <h2>{activeCount}</h2>
            <p>نشطة</p>
          </div>

          <div>
            <h2>{completedCount}</h2>
            <p>مكتملة</p>
          </div>
        </div>

        <div className="todos">

          {filteredTodos.length === 0 ? (
            <div className="empty">
              لا توجد مهام
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            ))
          )}

        </div>

        {completedCount > 0 && (
          <button
            className="clear-btn"
            onClick={clearCompleted}
          >
            حذف المهام المكتملة
          </button>
        )}

      </div>

    </div>
  );
}