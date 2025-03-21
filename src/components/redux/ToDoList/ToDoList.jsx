import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./ToDoList.module.scss";
import { fetchTodos, addTodo, toggleTodo, removeTodo, setFilter } from "./toDoSlice";

export const ToDoList = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector(state => state.todo);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredTodos = items.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h1>ToDo List</h1>
      <div className={styles.inp_btn}>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => { 
          if (text.trim()) {
            dispatch(addTodo(text)); 
            setText(""); 
          }
        }}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("active"))}>Active</button>
        <button onClick={() => dispatch(setFilter("completed"))}>Completed</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
