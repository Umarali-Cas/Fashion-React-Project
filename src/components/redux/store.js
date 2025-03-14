import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/ToDoList/CartSlice";
import { todosSlice } from "./ToDoList/toDoSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        todo: todosSlice.reducer,
    }
});
