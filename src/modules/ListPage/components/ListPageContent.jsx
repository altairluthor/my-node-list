import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { List, Icon } from 'antd'
import '../style.css'

class ListPageContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      documentWidth: window.innerWidth - 45
    }
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDetail: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.addEventListener('resize', this.getDocumentWidth)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getDocumentWidth)
  }

  getDocumentWidth = () => this.setState({ documentWidth: window.innerWidth - 45 })

  render() {
    const { data, handleEdit, handleDetail } = this.props
    const { documentWidth } = this.state
    return (<div className='list-page-wapper'><List
      header={<h2 className='page-title'>笔记</h2>}
      footer={<div className='list-page-foot'>
        <div>{`${data.length}条`}</div>
        <Icon
          type='edit'
          theme='filled'
          style={{ color: 'rgb(255, 100, 40)' }}
          title='新增笔记'
          onClick={handleEdit}
        />
      </div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>
        <List.Item.Meta
          title={<div className='list-page-listcontent' style={{ width: documentWidth }}>{item.title}</div>}
          description={item.date}
          onClick={_ => handleDetail(item.id)}
          style={{ cursor: 'pointer' }}
        />
      </List.Item>}
    /></div>)
  }
}

export default ListPageContent