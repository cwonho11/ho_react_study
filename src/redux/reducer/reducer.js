let initialState = {
    count:0
}

function reducer(state = initialState, action) {
    // console.log("action???",action);
    if(action.type === "INCREMENT") {
        // ...spread 문법
        return { ...state, count: state.count + action.payload.num };
    } else if(action.type === "DECREMENT") {
        return { ...state, count: state.count > 0 ? state.count - action.payload.num : 0 };
    }

    return { ...state };
}

export default reducer;