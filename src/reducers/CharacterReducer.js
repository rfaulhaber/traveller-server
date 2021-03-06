import Sheet from '../modules/Sheet';
import {RANDOM_CHARACTERISTICS, REROLL_CHARACTERISTICS, SET_CHARACTERISTIC} from "../actions/CharacterCreation";

const initialState = new Sheet();

export default function CharacterCreation(state = initialState, action) {
    switch (action.type) {
        case SET_CHARACTERISTIC:
            return newState(state, {
                characteristics: newCharacteristics(state.characteristics, action.value)
            });
        case REROLL_CHARACTERISTICS:
        case RANDOM_CHARACTERISTICS:
            return newState(state, {
                characteristics: action.value
            });
        default:
            return state;
    }
};

function newState(state, newProps) {
    return Object.assign({}, state, newProps);
}

function newCharacteristics(characteristics, newCharacteristic) {
    const newValues = Object.assign({}, characteristics);
    newValues[newCharacteristic.name] = newCharacteristic;

    return newValues;
}
