import _ from "lodash";
import { TASKLIST } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (task = {}, action: { type: string; response: any }) => {
  // ステートの内容によって変別する処理
  switch (action.type) {
    case TASKLIST:
      return _.mapKeys(action.response.data, "id");

    default:
      return task;
  }
};
