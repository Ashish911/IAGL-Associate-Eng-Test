import axios from "axios";
import { FETCH_TODOS, TODO_ERROR, SET_FILTER } from "./types";

const API_URL = "http://localhost:9091/api/todo";

function fetchTodos() {
  return function (dispatch) {
    return axios
      .get(API_URL)
      .then((response) => {
        const data = handleResponse(response);
        dispatch(setTodos(data || []));
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(todoError({ message: errorMessage }));
        throw new Error(errorMessage);
      });
  };
}

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}

function todoError(error) {
  return {
    type: TODO_ERROR,
    payload: error.message || "An error occurred",
  };
}

function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: filter,
  };
}

// Extract response data and handle success/error
const handleResponse = (response) => {
  if (!response.data.success) {
    throw new Error(response.data.message || "Request failed");
  }
  return response.data.data;
};

export { fetchTodos, setFilter };
