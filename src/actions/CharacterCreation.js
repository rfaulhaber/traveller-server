import Characteristic from "../modules/Characteristic";

export const SET_CHARACTERISTIC = 'SET_CHARACTERISTIC';

export function setCharacteristic(characteristic, value) {
    return {
        type: SET_CHARACTERISTIC,
        value: new Characteristic(characteristic.name, value)
    }
}

export function setSkills(skills) {
    // accepts array
}

