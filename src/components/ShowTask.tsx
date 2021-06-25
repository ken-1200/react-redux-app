import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { getTask, updateTask, deleteTask } from '../actions';
import '../App.css';

type Props = {
  deleteTask: any;
  getTask: any;
  updateTask: any;
  history: any;
  match: any;
}

type submitType = {
  title: string;
  text: string;
}

class ShowTask extends Component<Props, {}> {
  // 初期化
  constructor(props: any) {
    super(props);

    // イベントハンドラをインスタンスにバインドする
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    
    // マウント時にidに紐づく情報を取得
    if(id) this.props.getTask(id);
  }

  // メンバ関数
  private renderField(field: any): JSX.Element {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    }
    = field;

    return (
      <React.Fragment>
        <TextField 
          hintText={ label }
          floatingLabelFixed={ !!label }
          type={ type }
          errorText={ touched && error }
          { ...input }
          fullWidth={ true }
        />
      </React.Fragment>
    )
  }

  // 更新
  private async onSubmit(values: submitType) {
    await this.props.updateTask(values);

    // task一覧画面へ
    this.props.history.push("/");
  }

  // 削除
  private async onDeleteClick() {
    // オブジェクトを拾う方法
    const { id } = this.props.match.params;

    // 削除処理
    await this.props.deleteTask(id);

    // task一覧画面へ
    this.props.history.push("/");
  }

  // 画面描画
  render() {
    // propsを引き取っている
    const { handleSubmit, pristine, submitting, invalid }: any = this.props;
    const style = {
      margin: "12px",
    }

    return (
      <React.Fragment>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <div><Field label="Title" name="title" type="text" component={ this.renderField } /></div>
          <div><Field label="Text" name="text" type="text" component={ this.renderField } /></div>
          <RaisedButton label="Submit" type="submit" style={ style } disabled={ pristine || submitting || invalid } />
          <RaisedButton label="Cancel" style={ style } containerElement={ <Link to="/" /> } />
          <RaisedButton label="Delete" style={ style } onClick={ this.onDeleteClick } />
        </form>
      </React.Fragment>
    );
  };
};

const validate = (values: any) => {
  const error: any = {};

  if (!values.title) error.title = "タイトルを入力してください。";
  if (!values.text) error.text = "テキストを入力してください。";

  return error;
}

// Propsに該当のタスクを渡す
const mapStateToProps = (state: any, ownProps: any) => {
  const task = state.task[ownProps.match.params.id];
  return { initialValues: task, task };
};

// ステートとアクション(reducersの中身)をPropsに渡す
const mapDispathToProps: any = ({ getTask, updateTask, deleteTask });

export default connect(mapStateToProps, mapDispathToProps)(
  reduxForm<{}, any>({ validate, form: "showTaskForm", enableReinitialize: true })(ShowTask)
);
