import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditPageContent from '../../components/DetailContent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { message, Modal } from 'antd'
import moment from 'moment'
import { addData } from './action'

const { confirm } = Modal

class EditPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }

  static propTypes = {
    history: PropTypes.object,
    addData: PropTypes.func
  }

  // 修改内部组件表单值
  handleChange = value => {
    this.setState({ data: value })
  }

  // 点击保存按钮方法
  handleButtonClick = () => {
    const { data } = this.state
    const { addData } = this.props
    console.log(data)
    if (data.length <= 0 || data.length > 250) {
      message.error('字数应在1~250之间')
      return
    }
    const formatData = {
      title: (data || '').split(/[\r\n]/g)[0], // 截取首行作为title
      content: data,
      id: moment().valueOf(),
      date: moment().format('YYYY-MM-DD')
    }
    addData(formatData).then(res => {
      this.props.history.push('/')
    })
  }

  // 点击返回按钮方法
  handleReturnClick = () => {
    confirm({
      title: '是否需要保存成新笔记?',
      onOk: close => {
        this.handleButtonClick()
        close()
      },
      onCancel: close => {
        this.props.history.push('/')
        close()
      },
      okText: '保存',
      cancelText: '放弃修改'
    })
  }

  render() {
    return (<EditPageContent
      titleText='新建笔记'
      buttonText='保存'
      data={this.state.data}
      handleChange={this.handleChange}
      handleReturnClick={this.handleReturnClick}
      handleButtonClick={this.handleButtonClick}
      type='edit'
    />)
  }
}

export default  connect(
  state => ({}),
  { addData }
)(withRouter(EditPage))