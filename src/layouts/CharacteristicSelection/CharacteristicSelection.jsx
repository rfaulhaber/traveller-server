import React, {Component} from 'react';
import {connect} from 'react-redux';
import Characteristic from '../../components/Characteristic/Characteristic';
import Roll from '../../components/Roll/Roll';
import {ROLL_2D} from "../../actions/RollAction";
import {rerollCharacteristics, setCharacteristic} from "../../actions/CharacterCreation";

// import "./CharacteristicSelection.css";

class CharacteristicSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            assignedCount: 0,
            rerollDisabled: true,
            randomDisabled: false
        };
    }

    onAssign = characteristic => {
        if (this.props.rollValue > 0) {
            this.props.onAssign(characteristic, this.props.rollValue);
        }

        this.setState({assignedCount: this.state.assignedCount + 1});
    };

    onReroll = () => {
        this.setState({assignedCount: 0});
        this.props.onReroll();
    };

    onRandom = () => {
        // const characteristics = initialCharacteristics();
        //
        // for (let key of Object.keys(characteristics)) {
        //     const value = Dice.d2();
        //     characteristics[key].value = value;
        //     characteristics[key].mod = findMod(value);
        //     characteristics[key].assigned = true;
        // }
        //
        // this.setState({characteristics, rerollDisabled: false, randomDisabled: true});
    };

    render() {
        return (
            <div className="CharacteristicSelection">
                <h3>Click "roll" below and assign the value to a characteristic</h3>
                <table className="CharacteristicsBox">
                    <tbody>
                    {Object.values(this.props.characteristics).map((characteristic) =>
                        <tr key={characteristic.name}>
                            <td>
                                <Characteristic value={characteristic}/>
                            </td>
                            <td>
                                <button onClick={this.onAssign.bind(this, characteristic)}
                                        disabled={characteristic.value > 0}>Assign
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div>
                    <button disabled={this.state.assignedCount < 6} onClick={this.onReroll}>Re-roll?</button>
                    <button disabled={this.state.randomDisabled} onClick={this.onRandom}>Random</button>
                </div>
                <span className="RollBox">
                    <Roll type={ROLL_2D} onChange={this.onRollChange} disabled={this.state.rollDisabled}/>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        characteristics: state.CharacterCreation.characteristics,
        rollValue: state.Roll.value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAssign: (characteristic, value) => dispatch(setCharacteristic(characteristic, value)),
        onReroll: () => dispatch(rerollCharacteristics())
    };
};

CharacteristicSelection = connect(mapStateToProps, mapDispatchToProps)(CharacteristicSelection);

export default CharacteristicSelection;