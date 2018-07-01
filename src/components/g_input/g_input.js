import React from 'react'
import PropTypes from 'prop-types'

class GlobalInput extends React.Component {
  constructor(props) {
    super(props)
    const v = this.props.value
    
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }

  // check value with pattern
  checkValue (v) {
    if(this.props.pattern === null) {
      return true
    } 
    return this.props.pattern.test(v)
  }

  // try checking and filtering
  handleChange (e) {
    const v = e.target.value
    const filter = this.props.filter
    let newValue = v

    if (filter !== null) {
      newValue = newValue.replace(filter, '')
    }
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })

    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK,
        name: this.props.name
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }

  render () {
    const okStatus = this.renderStatus()
    const msg = this.renderStatusMessage()
    return (
      <div className="input-wrapper">
        <label>
          <p>{this.props.label}</p>
          <input type={this.props.pw?"password":"text"}
            name={this.props.name}
            placeholder={this.props.label}
            value={this.state.value}
            onChange={(e) => this.handleChange(e)} />
          {okStatus}
        </label>
        {msg}
      </div>
    )
  }

  renderStatus () {
    let okStatus = null
    if (this.state.isOK) {
      okStatus = <span style={{ color: "#00BFA5" }}>OK</span>
    } else {
      if (this.state.value !== '') {
        okStatus = <span style={{ color: "#E91E63" }}>NG</span>
      }
    }
    return okStatus
  }

  renderStatusMessage () {
    let msg = null
    if (this.state.isOK) {
      msg = <i style={{display:"none"}}></i>
    } else {
      if (this.state.value !== '') {
        msg = <i>{this.props.msg}</i>
      }
    }
    return msg
  }
}

GlobalInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

GlobalInput.defaultProps = {
  filter: null,
  pattern: null,
  value: '',
  placeholder: '',
  onChange: null
}

export default GlobalInput