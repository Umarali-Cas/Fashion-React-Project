import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("http://localhost:3001/todos");
  return response.json();
});

export const addTodo = createAsyncThunk("todos/addTodo", async (text) => {
  const newTodo = { id: Date.now(), text, completed: false };
  await fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  });
  return newTodo;
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await fetch(`http://localhost:3001/todos/${id}`, { method: "DELETE" });
  return id;
});

export const toggleTodo = createAsyncThunk("todos/toggleTodo", async (id, { getState }) => {
  const todo = getState().todo.items.find(todo => todo.id === id);
  const updatedTodo = { ...todo, completed: !todo.completed };

  await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });

  return updatedTodo;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState: { items: [], filter: "all", status: "idle" },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const { setFilter } = todosSlice.actions;
export default todosSlice.reducer;
