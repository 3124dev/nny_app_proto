import React from 'react'
import { NavLink } from 'react-router-dom'

class Find extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <br /><br /><br />
        <NavLink to="/login" id="back-bt">
          <p>←</p>
        </NavLink>
        <br /><br /><br />
        <h1>Find</h1>
        <p>temp</p>
      </div>
    )
  }
}

export default Find