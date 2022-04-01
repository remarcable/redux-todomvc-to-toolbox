import { createSelector } from "reselect";
import { VisibilityFilter } from "../appSlice";
import { RootState } from "../store";

const getVisibilityFilter = (state: RootState) => state.app.visibilityFilter;
const getTodos = (state: RootState) => state.app.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos],
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case VisibilityFilter.SHOW_ALL:
                return todos;
            case VisibilityFilter.SHOW_COMPLETED:
                return todos.filter((t) => t.completed);
            case VisibilityFilter.SHOW_ACTIVE:
                return todos.filter((t) => !t.completed);
            default:
                throw new Error("Unknown filter: " + visibilityFilter);
        }
    }
);

export const getCompletedTodoCount = createSelector([getTodos], (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);
