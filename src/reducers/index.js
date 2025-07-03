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

    default:
      return state;
  }
}
