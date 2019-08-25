import { createAction } from 'redux-actions'
import axios from 'axios'

export let getListData = createAction('GET_LIST_DATA', _ => axios.get('http://localhost:4000/nodeList'))
export let deleteListData = createAction('DELETE_LIST_DATA', id => axios.delete(`http://localhost:4000/nodeList/${id}`))
export let setDetailData = createAction('SET_DETAIL_DATA', id => id)
