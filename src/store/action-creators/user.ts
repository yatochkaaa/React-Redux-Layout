import { type Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { type UserAction, UserActionTypes } from '../../types/user'

export const fetchUsers = (): any =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: 'An error occurred while loading users.'
      })
    };
  }
