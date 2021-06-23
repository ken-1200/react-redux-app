export const INCREMENT: string = "INCREMENT";
export const DECREMENT: string = "DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
