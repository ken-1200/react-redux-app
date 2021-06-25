import axios from "axios";

export const TASKLIST: string = "TASKLIST";
export const CREATETASK: string = "CREATETASK";

// 一覧取得
export const tasklist = () => async (dispatch: any) => {
  // タスク一覧取得
  const url = `${process.env.REACT_APP_BSSE_URL}todos`;
  const response = await axios.get(url);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: TASKLIST, response });
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
