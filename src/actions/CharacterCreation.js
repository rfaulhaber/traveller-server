import Characteristic from "../modules/Characteristic";
import Sheet from '../modules/Sheet';

export const SET_CHARACTERISTIC = 'SET_CHARACTERISTIC';
export const REROLL_CHARACTERISTICS = 'REROLL_CHARACTERISTICS';
export const RANDOM_CHARACTERISTICS = 'RANDOM_CHARACTERISTICS';

export function setCharacteristic(characteristic, value) {
    return {
        type: SET_CHARACTERISTIC,
        value: new Characteristic(characteristic.name, value)
    }
}

export function rerollCharacteristics() {
    return {
        type: REROLL_CHARACTERISTICS,
        value: Object.assign({}, new Sheet().characteristics)
    }
}

export function randomCharacteristics() {
    return {
        type: RANDOM_CHARACTERISTICS,
        value: makeRandomCharacteristics()
    }
}

export function setSkills(skills) {
    // accepts array
}

function makeRandomCharacteristics() {
    const characteristics = Object.assign({}, new Sheet().characteristics);
    console.log('characteristics', characteristics);

    for (let key of Object.keys(characteristics)) {
        characteristics[key].value = random(2, 12);
    }

    return characteristics;

    // TODO: do this better
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
