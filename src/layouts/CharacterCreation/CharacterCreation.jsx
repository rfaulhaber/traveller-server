import React, {Component} from 'react';
import CharacteristicSelection from '../../components/CharacteristicSelection/CharacteristicSelection';
import SkillSelection from '../../components/SkillSelection/SkillSelection';

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h1>Character creation</h1>
            <CharacteristicSelection/>
            <br/>
            <SkillSelection />
        </div>
    ) ;
    }
}
