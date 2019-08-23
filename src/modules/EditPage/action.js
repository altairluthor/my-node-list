import { createAction } from 'redux-actions'
import axios from 'axios'

export let addData = createAction('ADD_LIST_DATA', data => axios.post('http://localhost:4000/nodeList', data))
