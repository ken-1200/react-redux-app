import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';
import '../App.css';

type Props = {
  value: number,
  increment: React.MouseEventHandler<HTMLButtonElement> | undefined,
  decrement: React.MouseEventHandler<HTMLButtonElement> | undefined,
}

class App extends Component<Props, {}> {
  // 画面描画
  render() {
    return (
      <React.Fragment>
        <div>count: { this.props.value }</div>
        <button onClick={ this.props.increment }>+1</button>
        <button onClick={ this.props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

// ステートとアクション(reducersの中身)をPropsに渡す
const mapStateToProps = (state: any) => ({ value: state.count.value });
const mapDispathToProps = ({ increment, decrement });

// const mapDispathToProps = (dispatch: any) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispathToProps)(App);
