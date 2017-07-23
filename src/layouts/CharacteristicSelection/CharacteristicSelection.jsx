import React, {Component} from 'react';
import {connect} from 'react-redux';
import Characteristic from '../../components/Characteristic/Characteristic';
import Roll from '../../components/Roll/Roll';
import {ROLL_2D} from "../../actions/RollAction";
import {setCharacteristic} from "../../actions/CharacterCreation";

// import "./CharacteristicSelection.css";

class CharacteristicSelection extends Component {
    onAssign = characteristic => {
        this.props.onAssign(characteristic, this.props.rollValue);
    };
    onReroll = () => {
        // const characteristics = initialCharacteristics();
        // this.setState({characteristics, rerollDisabled: true, randomDisabled: false});

        // TODO: dispatch reroll
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

    constructor(props) {
        super(props);

        this.state = {
            assignedCount: 0,
            rollDisabled: false,
            rerollDisabled: true,
            randomDisabled: false
        };

    }

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
                                <button onClick={this.onAssign.bind(this, characteristic)}>Assign</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div>
                    <button disabled={this.state.rerollDisabled} onClick={this.onReroll}>Re-roll?</button>
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
        onAssign: (characteristic, value) => dispatch(setCharacteristic(characteristic, value))
    };
};

CharacteristicSelection = connect(mapStateToProps, mapDispatchToProps)(CharacteristicSelection);

export default CharacteristicSelection;