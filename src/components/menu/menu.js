import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import './menu.css'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      sideOpen: false,
      curNav: window.location.pathname
    }
  }
  openNav () {
    this.setState({
      sideOpen: true
    })
  }

  handleNavtoggle () {
    this.setState({
      sideOpen: !this.state.sideOpen
    })
  }

  closeNav (e) {
    this.setState({
      sideOpen: false
    })
  }

  render() {
    const menubt = (
      <div className="menu-icon" onClick={() => this.openNav()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
    )

    const account = (
      <div className="account-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </div>
    )

    const navActive = {
      fontWeight: 'bold',
      color: '#FFA000',
      fill: '#FFA000'
    }

    const CurLoc = withRouter(({ location }) => (
      <p className="current-nav">{ location.pathname.replace('/','') }</p>
    ))

    return (
      <div className="app-bar-menu">
        {menubt}
        <CurLoc />
        <div id="menu-sidenav" className={"sidenav" + (this.state.sideOpen?' sideopen': ' sideclose')}>
          <a className="closebtn" onClick={(e) => this.closeNav(e)}>
            &times;
          </a>
          <NavLink to="/home" activeStyle={navActive} onClick={(e) => this.closeNav(e)}>Home</NavLink>
          <NavLink to="/class" activeStyle={navActive} onClick={(e) => this.closeNav(e)}>Class</NavLink>
          <NavLink to="/manage" activeStyle={navActive} onClick={(e) => this.closeNav(e)}>Manage</NavLink>
          <div className={"setbtns" + (this.state.sideOpen ? ' sideopen' : ' sideclose')}>
            <NavLink to="/account" activeStyle={navActive} onClick={(e) => this.closeNav(e)}>{account}</NavLink>
          </div>
        </div>
        <div className={"overlay" + (this.state.sideOpen ? ' sideopen' : ' sideclose')} onClick={(e) => this.closeNav(e)}>
        </div>
      </div>
    )
  }
}

export default Menu