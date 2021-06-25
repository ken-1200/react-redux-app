import _ from "lodash";
import { TASKLIST, DELETETASK, GETTASK } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  task: any = {},
  action: { type: string; response: any; id: string }
) => {
  // ステートの内容によって変別する処理
  switch (action.type) {
    case TASKLIST:
      return _.mapKeys(action.response.data, "id");

    case DELETETASK:
      // オブジェクトの削除
      delete task[action.id];

      // 再表示
      return { ...task };

    case GETTASK:
      const data = action.response.data;

      // tasklistを並べて、idに該当するデータを取得するs
      return { ...task, [data.id]: data };

    default:
      return task;
  }
};
