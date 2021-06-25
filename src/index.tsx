import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import './index.css';
import reducer from './reducers';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';
import ShowTask from './components/ShowTask';
import reportWebVitals from './reportWebVitals';

// devtoolでReduxを拡張
const enhancer = process.env.NODE_ENV === "development" ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);

// ストアを定義する・アプリ内で唯一のものになる
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <MuiThemeProvider>
    {/* プロバイダーで囲うと全ての階層でストアが使える */}
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ TaskList }></Route>
          <Route exact path="/task" component={ TaskList }></Route>
          <Route path="/task/new" component={ NewTask }></Route>
          <Route path="/task/:id" component={ ShowTask }></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
