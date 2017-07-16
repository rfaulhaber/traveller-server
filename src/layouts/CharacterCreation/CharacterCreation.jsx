import React, {Component} from 'react';
import CharacteristicSelection from '../../components/CharacteristicSelection/CharacteristicSelection';
import SkillSelection from '../../components/SkillSelection/SkillSelection';
import CharacterCreationFooter from "../../components/CharacterCreationFooter/CharacterCreationFooter";

/*
 TODO: create constant array of character creation stages, create component for each stage, increment / decrement
 stage based on progress
 */

// TODO: refactor these into a function that takes an index
const stages = [
    'CHARACTERISTICS',
    'BACKGROUND',
    'EDUCATION',
    'CAREER',
    'MUSTER'
];

const stageMap = {
    [stages[0]]: <CharacteristicSelection/>,
    [stages[1]]: <SkillSelection/>
};

// TODO: refactor using redux

export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: stages[0],
            index: 0,
        };
    }

    nextStage = () => {
        const nextIndex = this.state.index + 1;
        this.setState({
            stage: stages[nextIndex],
            index: nextIndex
        });
    };

    previousStage = () => {
        const nextIndex = this.state.index - 1;
        this.setState({
            stage: stages[nextIndex],
            index: nextIndex
        });
    };

    render() {
        const header = (
            <h1>Character creation</h1>
        );

        const body = stageMap[this.state.stage];

        return (
            <div>
                {header}
                {body}
                <CharacterCreationFooter onNext={this.nextStage} onBack={this.previousStage}
                                         onBackDisabled={this.state.index === 0}
                                         onNextDisabled={this.state.index === stages.length}/>
            </div>
        );
    }
}
