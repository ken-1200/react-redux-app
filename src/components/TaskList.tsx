import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      <TableRow key={ task.id }>
        <TableRowColumn>{ task.id }</TableRowColumn>
        <TableRowColumn>
          <Link to={ `/task/${task.id}` }>
            { task.title }
          </Link>
        </TableRowColumn>
        <TableRowColumn>{ task.text }</TableRowColumn>
      </TableRow>
    ));
  };

  // 画面描画
  render() {
    const style: any = {
      position: "fixed",
      right: "12px",
      bottom: "12px",
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={ style } containerElement={ <Link to="/task/new" /> }>
          <ContentAdd></ContentAdd>
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={ false }
            adjustForCheckbox={ false }
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Text</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={ false }
          >
            {/* 関数を渡すことで表示できる */}
            { this.renderTaskList() }
          </TableBody>
        </Table>
      </React.Fragment>
    );
  };
};

// ステートとアクション(reducersの中身)をPropsに渡す
const mapStateToProps = (state: any) => ({ task: state.task });
const mapDispathToProps = ({ tasklist });

export default connect(mapStateToProps, mapDispathToProps)(TaskList);
