import React, {Component} from 'react';
import CharacteristicSelection from '../../components/CharacteristicSelection/CharacteristicSelection';
import SkillSelection from '../../components/SkillSelection/SkillSelection';

/*
 TODO: create constant array of character creation stages, create component for each stage, increment / decrement
 stage based on progress
 */
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
