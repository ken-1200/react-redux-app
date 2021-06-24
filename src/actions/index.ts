import axios from "axios";

export const TASKLIST: string = "TASKLIST";

const url = `${process.env.REACT_APP_BSSE_URL}todos`;

export const tasklist = () => async (dispatch: any) => {
  // タスク一覧取得
  const response = await axios.get(url);

  // reducerのactionにdispatchで値を渡す
  dispatch({ type: TASKLIST, response });
};
