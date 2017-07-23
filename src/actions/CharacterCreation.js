import Characteristic from "../modules/Characteristic";
import Sheet from '../modules/Sheet';

export const SET_CHARACTERISTIC = 'SET_CHARACTERISTIC';
export const REROLL_CHARACTERISTICS = 'REROLL_CHARACTERISTICS';

export function setCharacteristic(characteristic, value) {
    return {
        type: SET_CHARACTERISTIC,
        value: new Characteristic(characteristic.name, value)
    }
}

export function rerollCharacteristics() {
    return {
        type: REROLL_CHARACTERISTICS,
        value: new Sheet().characteristics
    }
}

export function setSkills(skills) {
    // accepts array
}

