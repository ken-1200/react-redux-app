import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';

export const App = () => ( <Counter></Counter> )

type State= {
  count: number,
}

class Counter extends Component<{}, State> {
  // 初期化処理
  constructor(props: any) {
    super(props);
    this.state = { count: 0 };
  }

  handlePulsButton = () => {
    // ステートを更新する時のお決まり
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    // ステートを更新する時のお決まり
    this.setState({ count: this.state.count - 1 })
  }

  // 画面描画
  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePulsButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
