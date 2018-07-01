import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers'
import Routers from './routers.js'
const store = createStore(reducers)

render((
  <Routers store={store} />
), document.getElementById('root'))