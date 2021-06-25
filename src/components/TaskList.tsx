import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { tasklist } from '../actions';
import '../App.css';

type Props = any;

class TaskList extends Component<Props, {}> {
  // コンポーネントがマウントされた時に呼ばれる処理
  componentDidMount() {
    // ここでアクションで定義した関数を呼び出す
    this.props.tasklist();
  };

  // メンバ関数
  renderTaskList() {
    return _.map(this.props.task, task => (
      <tr key={ task.id }>
        <td>{ task.id }</td>
        <td>
          <Link to={ `/task/${task.id}` }>
            { task.title }
          </Link>
        </td>
        <td>{ task.text }</td>
      </tr>
    ));
  };

  // 画面描画
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Text</th>
            </tr>
          </thead>

          <tbody>
            {/* 関数を渡すことで表示できる */}
            { this.renderTaskList() }
          </tbody>
        </table>

        {/* リンク */}
        <Link to="/task/new">New Link</Link>
      </React.Fragment>
    );
  };
};

// ステートとアクション(reducersの中身)をPropsに渡す
const mapStateToProps = (state: any) => ({ task: state.task });
const mapDispathToProps = ({ tasklist });

export default connect(mapStateToProps, mapDispathToProps)(TaskList);
