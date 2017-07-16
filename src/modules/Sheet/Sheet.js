export default class Sheet {
    constructor() {
        this.characteristics = {
            'Strength': {value: 0, mod: 0},
            'Dexterity': {value: 0, mod: 0},
            'Endurance': {value: 0, mod: 0},
            'Intellect': {value: 0, mod: 0},
            'Education': {value: 0, mod: 0},
            'Social Standing': {value: 0, mod: 0}
        };

        this.skills = [];
        this.career = "";
        this.age = 18;
        this.eventLog = [];

        this.finances = {
            pension: 0,
            debt: 0,
            cash: 0,
            shipPayments: 0,
            livingCost: 0
        };

        this.weapons = [];
        this.augments = [];
        this.equipment = [];
    }
}