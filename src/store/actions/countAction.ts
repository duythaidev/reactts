import { DECREMENT, INCREMENT } from "./actionTypes";


export const increaseCounter = () => {
    return {
        type: INCREMENT,
    }
};

export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    }
};

