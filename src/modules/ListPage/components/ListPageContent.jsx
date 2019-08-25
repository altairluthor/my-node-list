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
    handleDetail: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.addEventListener('resize', this.getDocumentWidth)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getDocumentWidth)
  }

  getDocumentWidth = () => this.setState({ documentWidth: window.innerWidth - 45 })

  render() {
    const { data, handleEdit, handleDetail, handleDelete } = this.props
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
          style={{ cursor: 'pointer', width: '80%', overflow: 'hidden' }}
        />
        <div>
          <a href='javascript:void(0);' onClick={_ => console.log('edit')}>编辑</a>
          <span style={{margin: '0 5px'}}>{`|`}</span>
          <a href='javascript:void(0);' onClick={_ => handleDelete(item.id)}>删除</a>
        </div>
      </List.Item>}
    /></div>)
  }
}

export default ListPageContent