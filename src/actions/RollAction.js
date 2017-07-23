export const ROLL_1D = 'ROLL_1D';
export const ROLL_2D = 'ROLL_2D';
export const ROLL_D3 = 'ROLL_D3';
export const ROLL_D66 = 'ROLL_D66';

const RollTypes = {
    [ROLL_1D]: roll1D,
    [ROLL_2D]: roll2D,
    [ROLL_D3]: rollD3,
    [ROLL_D66]: rollD66
};

export default function roll(rollType) {
    return {
        type: 'ROLL',
        value: RollTypes[rollType]()
    };
}

function roll1D() {
    return rollD6();
}

function roll2D() {
    return rollD6() + rollD6();
}

function rollD3() {
    return (rollD6() % 3) + 1;
}

function rollD66() {
    return Number(rollD6().toString() + rollD6().toString());
}

function rollD6() {
    return random(1, 6);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
