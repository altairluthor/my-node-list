import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import './style.css'
const { TextArea } = Input

class DetailContent extends Component {
  constructor(props) {
    super(props)
    this.maxValue = 250
  }
  static propTypes = {
    titleText: PropTypes.string,
    buttonText: PropTypes.string,
    data: PropTypes.string,
    handleChange: PropTypes.func,
    handleButtonClick: PropTypes.func,
    handleReturnClick: PropTypes.func,
    type: PropTypes.string
  }
  handleChange = e => {
    const { value } = e.target
    this.props.handleChange(value)
  }
  render() {
    const { data, titleText, buttonText, handleButtonClick, handleReturnClick, type } = this.props
    const formatData = (data || '').replace(/((http|https):\/\/)+.+(\s|$)/, '<a href=$& target="_blank">$&</a>')
    return (<div className='detail-content'>
      <Icon type='left' className='detail-return-button' onClick={handleReturnClick} />
      <h2 className='page-title'>{titleText}</h2>
      <div className='detail-editbar-wapper'>
        {type === 'edit'
          ? <TextArea
            className='detail-editbar'
            value={data}
            onChange={this.handleChange}
          />
          : <div className='detail-readbar' dangerouslySetInnerHTML={{ __html: formatData }} />
        }
        <span className='detail-totalnumber'>{`${(data || '').length}/${this.maxValue}`}</span>
      </div>
      <Button className='detail-foot' onClick={handleButtonClick}>{buttonText}</Button>
    </div>)
  }
}

export default DetailContent