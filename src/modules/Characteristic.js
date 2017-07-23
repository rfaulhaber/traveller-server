export const defaultCharacteristics = [
    'Strength',
    'Dexterity',
    'Endurance',
    'Intellect',
    'Education',
    'Social Standing'
];

export default class Characteristic {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.mod = findMod(value);
    }
}

function findMod(value) {
    let ret;

    switch (value) {
        case 0:
            ret = -3;
            break;
        case 1:
        case 2:
            ret = -2;
            break;
        case 3:
        case 4:
        case 5:
            ret = -1;
            break;
        case 6:
        case 7:
        case 8:
            ret = 0;
            break;
        case 9:
        case 10:
        case 11:
            ret = 1;
            break;
        case 12:
        case 13:
        case 14:
            ret = 2;
            break;
        case 15:
        default:
            ret = 3;
            break;
    }

    return ret;
}

