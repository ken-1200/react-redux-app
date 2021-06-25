import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { deleteTask } from '../actions';
import '../App.css';

type Props = {
  deleteTask: any;
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
    console.log("ddd");
    super(props);

    // イベントハンドラをインスタンスにバインドする
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
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
      <div>
        <input { ...input } placeholder={ label } type={ type } />
        { touched && error && <span>{ error }</span> }
      </div>
    )
  }

  private async onSubmit(values: submitType) {
    // await this.props.createTask(values);

    // task一覧画面へ
    this.props.history.push("/");
  }

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
    const { handleSubmit, pristine, submitting }: any = this.props;

    return (
      <React.Fragment>
        <form onSubmit={ handleSubmit(this.onSubmit) }>
          <div>
            <Field label="Title" name="title" type="text" component={ this.renderField } />
            <Field label="Text" name="text" type="text" component={ this.renderField } />
          </div>

          <div>
            <input type="submit" value="Submit" disabled={ pristine || submitting } />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={ this.onDeleteClick }>Delete</Link>
          </div>
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

// ステートとアクション(reducersの中身)をPropsに渡す
const mapDispathToProps: any = ({ deleteTask });

export default connect(null, mapDispathToProps)(
  reduxForm<{}, any>({ validate, form: "newTaskForm" })(ShowTask)
);
