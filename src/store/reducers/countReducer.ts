import { DECREMENT, INCREMENT } from "../actions/actionTypes";

interface InitialState {
    count: number
}
const INITIAL_VAlUE: number = 0

interface actionType {
    type: typeof INCREMENT | typeof DECREMENT;
}

const countReducer = (state = INITIAL_VAlUE, action: actionType) => {
    switch (action.type) {
        case INCREMENT:
            console.log(INCREMENT)
            return state + 1
        case DECREMENT:
            console.log(DECREMENT)
            return state - 1
        default:
            return state
    }
};

export default countReducer