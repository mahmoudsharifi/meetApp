import React, { Component } from 'react'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.color = null // base component color set to null, children will override
  }

  getStyle = () => {
    return {
      color: this.color,
    }
  }

  render() {
    return (
      <div className='Alert' style={{ textAlign: 'center' }}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    )
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = 'green'
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = 'red'
  }
}

export { InfoAlert, ErrorAlert }
