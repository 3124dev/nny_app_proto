import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { checkAuth, putAuth } from './actions'

import Header from './components/header/header'
import Footer from './components/footer/footer'

import Login from './components/login/login'
import Signup from './components/signup/signup'
import Find from './components/find/find'

import Home from './components/home/home'
import Class from './components/class/class'
import Account from './components/account/account'
import Manage from './components/manage/manage'

import "./global.css";

import Store from './contextStore'

class Routers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        id: 'hubert',
        level: 'Challenger',
        extra: ['conversation'],
        blackList: false
      }
    }
  }
  componentWillMount(){
    this.props.checkFakeAuth()
  }

  authenticate(cb) {
    this.props.putFakeAuth(true)
    setTimeout(cb, 100)
  }

  signout(cb) {
    this.props.putFakeAuth(false)
    setTimeout(cb, 100)
  }

  render() {
    const AuthButton = withRouter(({ history }) => (
      this.props.isAuth ? (
          <button className="signout" onClick={() => {
            this.signout(() => history.push('/'))
          }}>Sign out</button>
      ) : (
          <p className="login-state">
            Please login or signup to continue.
          </p>
        )
    ))

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.isAuth === true
          ? <Component {...props} />
          : <Redirect to={{ 
              pathname: '/login', 
              state: { from : props.location }
            }} />
      )} />
    )  

    return (
      <Provider store={this.props.store}>
        <Store.Provider value={this.state}>
        <Router>
          <div>
            <div className="app-bar"> 
              <AuthButton />
              {this.props.isAuth ? <Header/> : ''}
            </div>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/class' component={Class} />
            <PrivateRoute path='/account' component={Account} />
            <PrivateRoute path='/manage' component={Manage} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/find' component={Find} />
            <Footer />
          </div>
        </Router>
        </Store.Provider>
      </Provider>
    )
  }
}

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

Routers = connect(mapStateToProps, mapDispatchToProps)(Routers)
export default Routers