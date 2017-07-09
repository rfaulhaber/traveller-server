import React, {Component} from "react";
import Characteristic from '../../components/Characteristic/Characteristic';
import Roll from '../../components/Roll/Roll';

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characteristics: {
                'Strength': {value: 0, assigned: false},
                'Dexterity': {value: 0, assigned: false},
                'Endurance': {value: 0, assigned: false},
                'Intellect': {value: 0, assigned: false},
                'Education': {value: 0, assigned: false},
                'Social Standing': {value: 0, assigned: false}
            },
            rollValue: 0
        }
    }

    onAssign = (characteristic) => {
        const characteristics = this.state.characteristics;
        characteristics[characteristic].value = this.state.rollValue;
        characteristics[characteristic].assigned = true;

        this.setState({
            characteristics: characteristics,
            rollValue: 0
        })
    };

    onRollChange = (value) => {
        this.setState({rollValue: value});
    };

    render() {
        return (
            <div>
                <h1>Character creation</h1>
                {Object.keys(this.state.characteristics).map((characteristic) =>
                    <div key={characteristic}>
                        <Characteristic name={characteristic} value={this.state.characteristics[characteristic].value}/>
                        <button onClick={this.onAssign.bind(this, characteristic)} disabled={this.state.characteristics[characteristic].assigned}>Assign</button>
                    </div>
                )}
                <Roll type="2D" onChange={this.onRollChange}/>
            </div>
        );
    }
}
