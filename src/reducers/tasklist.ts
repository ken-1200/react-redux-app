import _ from "lodash";
import { TASKLIST, DELETETASK } from "../actions";

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

    default:
      return task;
  }
};
