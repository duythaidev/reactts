import { DECREMENT, INCREMENT } from "./actionTypes";

export const increaseCounter = () => ({
  type: INCREMENT,
});

export const decreaseCounter = () => ({
  type: DECREMENT,
});