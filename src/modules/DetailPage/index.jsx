import React, { Component } from 'react'
import { connect } from 'react-redux'
import DetailPageContent from '../../components/DetailContent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class DetailPage extends Component {
  static propTypes = {
    history: PropTypes.object,
    detailData: PropTypes.object
  }
  handleReturnClick = () => {
    this.props.history.push('/')
  }
  render() {
    const { detailData } = this.props
    return (<DetailPageContent
      titleText='笔记详情'
      buttonText='返回'
      data={(detailData || {}).content}
      handleReturnClick={this.handleReturnClick}
      handleButtonClick={this.handleReturnClick}
      type='read'
    />)
  }
}

export default connect(
  state => ({ detailData: state.listPage.detailData }), {}
)(withRouter(DetailPage))