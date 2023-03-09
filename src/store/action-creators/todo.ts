import { type Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { type TodoAction, TodoActionTypes } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10): any =>
  async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      })
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: 'An error occurred while loading todos.'
      })
    };
  }

export const setTodoPage = (page: number): TodoAction =>
  ({ type: TodoActionTypes.SET_TODO_PAGE, payload: page })
