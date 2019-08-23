import { handleActions } from 'redux-actions'

const initialState = {
  data: [],
  detailData: {}
}

export const listPage = handleActions(
  {
    'GET_LIST_DATA': {
      next(state, action) {
        return {
          ...state,
          data: action.payload.data
        }
      },
      throw(state, action) {
        return {
          ...state
        }
      }
    },
    'SET_DETAIL_DATA': {
      next(state, action) {
        return {
          ...state,
          detailData: state.data.filter(item => item.id === action.payload)[0]
        }
      }
    }
  },
  initialState
)
