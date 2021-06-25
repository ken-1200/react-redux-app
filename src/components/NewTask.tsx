import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { createTask } from '../actions';
import '../App.css';

type Props = {
  createTask: any;
  history: any;
}

type submitType = {
  title: string;
  text: string;
}

class NewTask extends Component<Props, {}> {
  // 初期化
  constructor(props: any) {
    super(props);

    // イベントハンドラをインスタンスにバインドする
    this.onSubmit = this.onSubmit.bind(this);
  }

  // メンバ関数
  private renderField(field: any) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    }: any
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

  private async onSubmit(values: submitType) {
    await this.props.createTask(values);

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
const mapDispathToProps: any = ({ createTask });

export default connect(null, mapDispathToProps)(
  reduxForm<{}, any>({ validate, form: "newTaskForm" })(NewTask)
);
