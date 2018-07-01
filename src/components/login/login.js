import React from 'react'
import { connect } from 'react-redux'
import { checkAuth, putAuth } from '../../actions'
import { Redirect, NavLink } from 'react-router-dom'
import './login.css'

class Login extends React.Component {
  componentWillMount() {
    this.props.checkFakeAuth()
  }

  login = () => {
    this.props.putFakeAuth(true)
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } }

    if (this.props.isAuth === true) {
      return <Redirect to={from} />
    }

    return (
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login-head">
            <span></span>
              <div>
                <p>English For Everyone</p>
                <h1>혼자하는 TP Test</h1>
              </div>
            <span></span>
          </div>
          <div className="login-img" >
            <span className="mouse"></span>
          </div>
          <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={this.login}>Log in</button>
          </form>
          <div className="signup-container">
            <div className="signup">
              <NavLink to="/signup">
                회원가입
            </NavLink>
            </div>
            <div className="find-account">
              <NavLink to="/find">
                계정찾기
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
//<button type="submit" id="login-button">Login</button>

let mapDispatchToProps = (dispatch) => {
  return {
    putFakeAuth: (auth) => dispatch(putAuth(auth)),
    checkFakeAuth: () => dispatch(checkAuth())
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authenticate.isAuth
  }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login