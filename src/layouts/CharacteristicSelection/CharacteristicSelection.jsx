import React, {Component} from "react";
import Characteristic, {findMod} from "../../components/Characteristic/Characteristic";
import Roll from "../../components/Roll/Roll";
import Dice from '../../modules/Dice/Dice';
// import "./CharacteristicSelection.css";

const initialCharacteristics = () => {
    return {
        'Strength': {value: 0, mod: 0, assigned: false},
        'Dexterity': {value: 0, mod: 0, assigned: false},
        'Endurance': {value: 0, mod: 0, assigned: false},
        'Intellect': {value: 0, mod: 0, assigned: false},
        'Education': {value: 0, mod: 0, assigned: false},
        'Social Standing': {value: 0, mod: 0, assigned: false}
    }
};

// TODO: give choice for completely random characteristics i.e. roll 6 times and assign randomly

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characteristics: initialCharacteristics(),
            rollValue: 0,
            assignedCount: 0,
            rollDisabled: false,
            rerollDisabled: true,
            randomDisabled: false
        }
    }

    // TODO: refactor, remove necessity for binding
    onAssign = (characteristic) => {
        if (this.state.rollValue > 0) {
            const characteristics = this.state.characteristics;
            characteristics[characteristic].value = this.state.rollValue;
            characteristics[characteristic].mod = findMod(this.state.rollValue);
            characteristics[characteristic].assigned = true;

            const assignedCount = this.state.assignedCount + 1;

            const rerollDisabled = assignedCount !== Object.keys(characteristics).length;

            this.props.save({characteristics});

            this.setState({
                characteristics,
                rollValue: 0,
                assignedCount,
                rollDisabled: false,
                rerollDisabled
            });
        }
    };

    onRollChange = (value) => {
        this.setState({rollValue: value, rollDisabled: true});
    };

    onReroll = () => {
        const characteristics = initialCharacteristics();
        this.setState({characteristics, rerollDisabled: true, randomDisabled: false});
    };

    onRandom = () => {
        const characteristics = initialCharacteristics();

        for (let key of Object.keys(characteristics)) {
            const value = Dice.d2();
            characteristics[key].value = value;
            characteristics[key].mod = findMod(value);
            characteristics[key].assigned = true;
        }

        this.setState({characteristics, rerollDisabled: false, randomDisabled: true});
    };

    render() {
        return (
            <div className="CharacteristicSelection">
                <h3>Click "roll" below and assign the value to a characteristic</h3>
                <table className="CharacteristicsBox">
                    <tbody>
                    {Object.keys(this.state.characteristics).map((characteristic) =>
                        <tr key={characteristic}>
                            <td>
                                <Characteristic name={characteristic}
                                                value={this.state.characteristics[characteristic].value}
                                />
                            </td>
                            <td>
                                <button onClick={this.onAssign.bind(this, characteristic)}
                                        disabled={this.state.characteristics[characteristic].assigned}>Assign
                                </button>
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
                    <Roll type="2D" onChange={this.onRollChange} disabled={this.state.rollDisabled}/>
                </span>
            </div>
        );
    }
}
