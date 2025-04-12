import { DECREMENT, DELETE_ACCOUNT, INCREMENT, SAVE_ACCOUNT } from "../actions/actionTypes";

interface InitialState {
    userName: string
}

// const INITIAL_STATE: InitialState = {
//     count: 0
// };
const INITIAL_VAlUE: InitialState = {
    userName: ''
}

interface actionType {
    type: typeof SAVE_ACCOUNT | typeof DELETE_ACCOUNT;
}

const accountReducer = (state = INITIAL_VAlUE, action: actionType) => {
    switch (action.type) {
        case SAVE_ACCOUNT:
            return {
                ...state,
                userName: ''
            }
        case DELETE_ACCOUNT:
            return {
                ...state,
                userName: ''
            }
        default:
            return state
    }
};

export default accountReducer