import { INCREMENT, DECREMENT } from "../actions";

const initialState = { value: 0 };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, actions: { type: string }) => {
  // ステートの内容によって変別する処理
  switch (actions.type) {
    case INCREMENT:
      return { value: state.value + 1 };

    case DECREMENT:
      return { value: state.value - 1 };

    default:
      return state;
  }
};
