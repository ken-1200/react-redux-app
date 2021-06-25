import axios from "axios";

export const TASKLIST: string = "TASKLIST";
export const GETTASK: string = "GETTASK";
export const CREATETASK: string = "CREATETASK";
export const DELETETASK: string = "DELETETASK";

// 一覧取得
export const tasklist = () => async (dispatch: any) => {
  // タスク一覧取得
  const url = `${process.env.REACT_APP_BSSE_URL}todos`;
  const response = await axios.get(url);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: TASKLIST, response });
};

// idタスク取得
export const getTask = (id: string) => async (dispatch: any) => {
  // タスク削除
  const url = `${process.env.REACT_APP_BSSE_URL}todos/${id}`;
  const response = await axios.get(url);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: GETTASK, response });
};

interface type {
  id: number;
  title: string;
  text: string;
}

// タスク作成
export const createTask = (requestData: any) => async (dispatch: any) => {
  // タスク作成
  const url = `${process.env.REACT_APP_BSSE_URL}todos`;
  const payload = {
    title: requestData.title,
    text: requestData.text,
  };
  const response = await axios.post<type[]>(url, payload);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: CREATETASK, response });
};

// タスク削除
export const deleteTask = (id: string) => async (dispatch: any) => {
  // タスク削除
  const url = `${process.env.REACT_APP_BSSE_URL}todos/${id}`;
  await axios.delete(url);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: DELETETASK, id });
};
