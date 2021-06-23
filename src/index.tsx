import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import TaskList from './components/TaskList';
import reportWebVitals from './reportWebVitals';

// ストアを定義する・アプリ内で唯一のものになる
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    {/* プロバイダーで囲うと全ての階層でストアが使える */}
    <Provider store={ store }>
      <TaskList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
