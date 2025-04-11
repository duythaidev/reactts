import { DECREMENT, INCREMENT } from "../actions/actionTypes";

interface InitialState {
    count: number
}

// const INITIAL_STATE: InitialState = {
//     count: 0
// };
const INITIAL_VAlUE: number = 0

interface actionType {
    type: typeof INCREMENT | typeof DECREMENT;
}

const accountReducer = (state = INITIAL_VAlUE, action: actionType) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
};

export default accountReducer