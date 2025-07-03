import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TODO_ERROR,
  SET_FILTER,
} from "../actions/types";

const initialState = {
  todos: [],
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        error: null,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        error: null,
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        error: null,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        error: null,
      };

    case TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
