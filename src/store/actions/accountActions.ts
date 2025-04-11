import { DECREMENT, INCREMENT, ActionTypes } from "./actionTypes";

export const 
increaseCounter = (): ActionTypes => {
  return { 
    type: INCREMENT
   }
};

export const decreaseCounter = (): ActionTypes => {
  return { 
    type: DECREMENT
   }
}