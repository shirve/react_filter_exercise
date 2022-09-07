import * as types from '../people/types'

export const setQueryValue = (payload) => ({
  type: types.SET_QUERY_VALUE,
  payload: payload,
})
