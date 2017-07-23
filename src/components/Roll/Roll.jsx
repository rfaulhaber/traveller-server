import React, {Component} from "react";
import {connect} from 'react-redux';
import roll from "../../actions/RollAction";
import "./Roll.css";

class Roll extends Component {
    onRoll = () => {
        // const newValue = this.roll();
        //
        // this.setState({
        //    rollValue: newValue
        // });
        //
        // if (this.props.onChange) {
        //     this.props.onChange(newValue);
        // }

        this.props.onRoll(this.props.rollType);
    };

    constructor(props) {
        super(props);

        console.log('roll props', props);
        //
        // if (!props.type) {
        //     throw new Error('Type prop is required');
        // }
        //
        // this.roll = rollType(props.type);
        // this.state = {rollValue: 0};
    }

    render() {
        return (
            <div className="Roll">
                <h1>
                    <span>{this.props.rollValue}</span>
                    <span>
                        {this.props.mod &&
                            " + " + this.props.mod
                        }
                    </span>
                </h1>
                <button onClick={this.onRoll} disabled={this.props.disabled}>
                    Roll
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        rollValue: state.Roll.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRoll: (rollType) => dispatch(roll(rollType))
    };
};

Roll = connect(mapStateToProps, mapDispatchToProps)(Roll);

export default Roll;
