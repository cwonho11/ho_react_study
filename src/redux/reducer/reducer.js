let initialState = {
    contactList:[],
    name: ""
};

function reducer(state=initialState, action) {
    // 객체 destructuring 문법
    const { type, payload } = action;

    switch(type) {
        case "ADD_CONTACT" :
            return { 
                ...state, 
                contactList: [
                    ...state.contactList, 
                    {
                        name: payload.name, 
                        phoneNumber: payload.phoneNumber
                    }
                ] 
            };
        case "SEARCH_CONTACT" :
            return { ...state, name: payload.name }
        default :
            return { ...state };
    }
}

export default reducer;