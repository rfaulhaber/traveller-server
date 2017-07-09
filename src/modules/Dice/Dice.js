export default class Dice {
    static d() {
        return d6();
    }

    static d2() {
        return d6() + d6();
    }

    static dAccess() {
        return d6() - 1;
    }

    static d2Acess() {
        return this.d2() - 2;
    }

    static d66() {
        return Number(d6().toString() + d6().toString());
    }

    static d3() {
        return (d6() % 3) + 1;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function d6() {
    return random(1, 6);
}