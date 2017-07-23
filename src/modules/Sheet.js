import Characteristic, {defaultCharacteristics} from './Characteristic';

export default class Sheet {
    constructor() {
        this.characteristics = {};

        for (let characteristic of defaultCharacteristics) {
            this.characteristics[characteristic] = new Characteristic(characteristic, 0);
        }

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