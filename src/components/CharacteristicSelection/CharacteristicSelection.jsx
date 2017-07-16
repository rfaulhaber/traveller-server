import React, {Component} from 'react';
import Characteristic, {findMod} from '../../components/Characteristic/Characteristic';
import Roll from '../../components/Roll/Roll';
import './CharacteristicSelection.css';

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characteristics: {
                'Strength': {value: 0, mod: 0, assigned: false},
                'Dexterity': {value: 0, mod: 0, assigned: false},
                'Endurance': {value: 0, mod: 0, assigned: false},
                'Intellect': {value: 0, mod: 0, assigned: false},
                'Education': {value: 0, mod: 0, assigned: false},
                'Social Standing': {value: 0, mod: 0, assigned: false}
            },
            rollValue: 0,
            assignedCount: 0,
            rerollDisabled: true
        }
    }

    // TODO: refactor, remove necessity for binding
    onAssign = (characteristic) => {
        const characteristics = this.state.characteristics;
        characteristics[characteristic].value = this.state.rollValue;
        characteristics[characteristic].mod = findMod(this.state.rollValue);
        characteristics[characteristic].assigned = true;

        const assignedCount = this.state.assignedCount + 1;

        let rerollDisabled = true;

        if (assignedCount === Object.keys(characteristics).length) {
            rerollDisabled = false;
        }

        console.log(assignedCount, rerollDisabled);

        this.setState({
            characteristics: characteristics,
            rollValue: 0,
            assignedCount: assignedCount,
            rerollDisabled: rerollDisabled
        });
    };

    onRollChange = (value) => {
        this.setState({rollValue: value});
    };

    render() {
        return (
            <div className="CharacteristicSelection">
                <h3>Click "roll" below and assign the value to a characteristic</h3>
                <table className="CharacteristicsBox">
                    <thead className="CharacteristicsBoxTitle">
                    <div>Characteristics</div>
                    </thead>
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
                    <tfoot>
                        <button disabled={this.state.rerollDisabled}>Re-roll?</button>
                        <button>Save</button>
                    </tfoot>
                </table>
                <span className="RollBox">
                    <Roll type="2D" onChange={this.onRollChange}/>
                </span>
            </div>
        );
    }
}
