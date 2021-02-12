const data = require("../Data/data.json");

const initalState = [data];

const orderReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SELECTED_ORDER":
            return {
                ...state,
                "orderselected": payload,
            };

        //find id to display orders
        /*
            const copyState = [...state];
            const i = copyState.findIndex(x => x.id === payload.id)
            copyState.concat([]);
            return [...copyState];
            */
        default:
            return state;
    }
};

export default orderReducer;
