import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/ToDoList/CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});
