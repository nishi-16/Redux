const selectOrder = (payload) => {
    return {
        type: "SELECTED_ORDER",
        payload,
    };
};

export default selectOrder;
