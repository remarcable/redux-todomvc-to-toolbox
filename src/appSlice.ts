import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    text: string;
    completed: boolean;
    id: number;
}

export enum VisibilityFilter {
    SHOW_ALL = "SHOW_ALL",
    SHOW_COMPLETED = "SHOW_COMPLETED",
    SHOW_ACTIVE = "SHOW_ACTIVE",
}

export interface AppState {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
}

let currentId = 0;
const initialState: AppState = {
    todos: [{ id: currentId++, text: "Use Redux", completed: false }],
    visibilityFilter: VisibilityFilter.SHOW_ALL,
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                text: action.payload,
                completed: false,
                id: currentId++,
            });
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (!todo) {
                return;
            }

            todo.text = action.payload.text;
        },
        completeTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (!todo) {
                return;
            }

            todo.completed = !todo.completed;
        },
        completeAllTodos: (state) => {
            const allCompleted = state.todos.every((todo) => todo.completed);
            state.todos.forEach((todo) => (todo.completed = !allCompleted));
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.completed);
        },

        setVisibilityFilter: (state, action: PayloadAction<VisibilityFilter>) => {
            state.visibilityFilter = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const actions = appSlice.actions;

export default appSlice.reducer;
