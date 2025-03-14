import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState: { items: [], filter: "all" },
    reducers: {
      addTodo: (state, action) => {
        state.items.push({ id: Date.now(), text: action.payload, completed: false })
      },
      toggleTodo: (state, action) => {
        const todo = state.items.find(todo => todo.id === action.payload)
        if (todo) todo.completed = !todo.completed
      },
      removeTodo: (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload)
      },
      setFilter: (state, action) => {
        state.filter = action.payload
      }
    }
  });