import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import {  } from '../actions';
import '../App.css';

type Props = any;

class NewTask extends Component<Props, {}> {
  // 画面描画
  render() {
    return (
      <React.Fragment>
        <div>new task</div>
      </React.Fragment>
    );
  };
};

// ステートとアクション(reducersの中身)をPropsに渡す
// const mapDispathToProps = ({ });

export default connect(null, null)(NewTask);
