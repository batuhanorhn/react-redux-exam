import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'

import App from '../App'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
 rootReducer,
 applyMiddleware(thunk)
 )

class Router extends React.Component {

 render() {
  return (
   <Provider store={store}>
    <div>
     <HashRouter>
      <div>
       <Route exact path="/" component={App} />
      </div>
     </HashRouter>
    </div>
   </Provider>
  )
 }
}

export default Router;