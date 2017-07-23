const initialState = {
    value: 0
};

export default function Roll(state = initialState, action) {
    switch (action.type) {
        case 'ROLL':
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
}