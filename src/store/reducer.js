const initalState = {
    counter: 0
};

const reducer = (state = initalState, action) => {
    if(action.type ==='INCREMENT'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type ==='ADD'){
        return {
            counter: state.counter + action.value
        }
    }
    return state;
};

export default reducer;