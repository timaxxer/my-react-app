import { handleActions } from 'redux-actions'
// ------------------------------------
// Constants
// ------------------------------------
export const GET_ACTIVE_USER = 'GET_ACTIVE_USER'
export const GET_ACTIVE_USER_SUCCESS = 'GET_ACTIVE_USER_SUCCESS'
export const GET_ACTIVE_USER_FAILURE = 'GET_ACTIVE_USER_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const getActiveUser = () => (dispatch) => {
  dispatch({ type: GET_ACTIVE_USER })

  Promise.resolve({name: 'Yanick Tremblay'})
    .then(data => {
      dispatch({ type: GET_ACTIVE_USER_SUCCESS, payload: data })
    })
  .catch((ex) => dispatch({ type: GET_ACTIVE_USER_FAILURE, payload: ex }))
}

export const actions = {
  getActiveUser
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [GET_ACTIVE_USER]: () => ({ loading: true }),
  [GET_ACTIVE_USER_SUCCESS]: (state, { payload }) => ({ user: payload, loading: false }),
  [GET_ACTIVE_USER_FAILURE]: (state, { payload }) => ({ error: payload, loading: false })
}, {loading: true})
