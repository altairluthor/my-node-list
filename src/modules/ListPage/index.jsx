import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListPageContent from './components/ListPageContent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getListData, setDetailData } from './action'
import moment from 'moment'

class ListPage extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    data: PropTypes.array,
    getListData: PropTypes.func,
    setDetailData: PropTypes.func
  }
  componentWillMount() {
    this.props.getListData()
  }
  render() {
    const { data, setDetailData } = this.props
    data.sort((a, b) => { return moment(a.id).isBefore(b.id) ? 1 : -1 })
    return (<ListPageContent
      data={data}
      handleEdit={() => this.props.history.push('/edit')}
      handleDetail={id => {
        setDetailData(id)
        this.props.history.push('/detail')
      }}
    />)
  }
}

export default connect(
  state => ({ data: state.listPage.data }),
  { getListData, setDetailData }
)(withRouter(ListPage))
