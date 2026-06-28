import { useEffect, useMemo, useState } from "react";
import { DEFAULT_TODOS, STORAGE_KEY } from "../constants";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_TODOS;
      }
    }

    return DEFAULT_TODOS;
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("الكل");
  const [category, setCategory] = useState("شخصي");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      category,
      createdAt: new Date().toISOString(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: text.trim() }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "الكل"
          ? true
          : filter === "نشطة"
          ? !todo.completed
          : todo.completed;

      return matchesSearch && matchesFilter;
    });
  }, [todos, search, filter]);

  const completedCount = todos.filter((todo) => todo.completed).length;

  const activeCount = todos.length - completedCount;

  const progress = todos.length
    ? Math.round((completedCount / todos.length) * 100)
    : 0;

  return {
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
  };
}