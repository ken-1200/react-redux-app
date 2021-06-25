import _ from "lodash";
import { CREATETASK } from "../actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (task = {}, action: { type: string; response: any }) => {
  // ステートの内容によって変別する処理
  switch (action.type) {
    case CREATETASK:
      console.log(action);
      return _.mapKeys(action.response.data, "id");

    default:
      return task;
  }
};
