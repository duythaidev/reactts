import { DECREMENT, INCREMENT } from "../actions/actionTypes";

interface InitialState {
    count: number
}

const INITIAL_STATE: InitialState = {
    count: 0
};

interface actionType {
    type: typeof INCREMENT | typeof DECREMENT;
}

const countReducer = (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default countReducer