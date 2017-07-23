import React, {Component} from "react";

export default class Characteristic extends Component {
    render() {
        const {name, value, mod} = this.props.value;
        return(
            <span>
                {name}: {value} + {mod}
            </span>
        );
    }
}
