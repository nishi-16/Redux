const initalState = [
    {
        id:1,
        ordername: "noFood",
        place: "noLocation"
    }
];

const orderReducer = (state=initalState , action) => {
    const {type , payload} = action;

    switch(type){
        case "SELECTED_ORDER":
            const copyState = [...state];

            //find id to display orders
            const i = copyState.findIndex(x => x.id === payload.id)
            copyState.concat([]);
            return [...copyState];
        default:
            return state
    }

    return state;
};

export default orderReducer;