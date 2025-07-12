import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Fetures/Todo/todoSlice"; // Default import

export const store = configureStore({
    reducer: todoReducer, // Key is 'todo', value is the reducer
    
});
