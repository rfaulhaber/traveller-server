import React, {Component} from "react";
import Dice from '../../modules/Dice/Dice';
import './Roll.css';

export default class Roll extends Component {
    constructor(props) {
        super(props);

        if (!props.type) {
            throw new Error('Type prop is required');
        }

        this.roll = rollType(props.type);
        this.state = {rollValue: 0};
    }

    onRoll = () => {
        const newValue = this.roll();

        this.setState({
           rollValue: newValue
        });

        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    };

    render() {
        return (
            <div className="Roll">
                <h1>
                    <span>{this.state.rollValue}</span>
                    <span>
                        {this.props.mod &&
                            " + " + this.props.mod
                        }
                    </span>
                </h1>
                <button onClick={this.onRoll}>
                    Roll
                </button>
            </div>
        );
    }
}

export function rollType(type) {
    return {
        "1D": Dice.d,
        "2D": Dice.d2,
        "D3": Dice.d3,
        "D66": Dice.d66
    }[type];
}
