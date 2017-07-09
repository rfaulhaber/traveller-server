import React, {Component} from "react";

export default class Characteristic extends Component {
    render() {
        const name = this.props.name;
        const value = this.props.value;
        return(
            <span>
                {name}: {value} + {findMod(value)}
            </span>
        );
    }
}

export function findMod(value) {
    let ret;

    switch(value) {
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
