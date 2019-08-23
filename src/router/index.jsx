import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ListPage from '../modules/ListPage'
import EditPage from '../modules/EditPage'
import DetailPage from '../modules/DetailPage'

class MyRouter extends Component{
  render() {
    return (<Router>
      <Route path="/" exact component={ListPage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/detail" component={DetailPage} />
    </Router>)
  }
}

export default MyRouter