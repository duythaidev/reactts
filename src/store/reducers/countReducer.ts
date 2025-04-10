interface initialState {
    count: number
}

const initialState: initialState = {
    count: 0
};

const countReducer = (): initialState => {
    return initialState
}


export default countReducer