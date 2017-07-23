import React, {Component} from "react";
import CharacteristicSelection from "../CharacteristicSelection/CharacteristicSelection";
import SkillSelection from "../SkillSelection/SkillSelection";
import Sheet from "../../modules/Sheet";
import CareerPhase from "../CareerPhase/CareerPhase";

// TODO: refactor these into a function that takes an index
const stages = [
    'CHARACTERISTICS',
    'BACKGROUND',
    'EDUCATION',
    'CAREER',
    'MUSTER'
];

// TODO: refactor using redux
export default class CharacterCreation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: stages[0],
            index: 0,
            isBackDisabled: true,
            isNextDisabled: false,
        };

        this.character = new Sheet();
    }

    nextStage = () => {
        this.changeStage(this.state.index + 1);
    };

    previousStage = () => {
        this.changeStage(this.state.index - 1);
    };

    changeStage = stageIndex => {
        const nextState = {
            stage: stages[stageIndex],
            index: stageIndex,
            isNextDisabled: stageIndex >= stages.length,
            isBackDisabled: stageIndex <= 0
        };

        this.setState(nextState);
    };

    onSave = newValues => {
        Object.assign(this.character, newValues);
        console.log(this.character);
    };

    render() {
        const header = (
            <h1>Character creation</h1>
        );

        this.stageMap = {
            [stages[0]]: <CharacteristicSelection/>,
            [stages[1]]: <SkillSelection skills={this.character.skills}
                                         count={3 + this.character.characteristics.Education.mod} save={this.onSave}/>,
            [stages[2]]: <CareerPhase save={this.onSave} characteristics={this.character.characteristics}/>
        };

        const body = this.stageMap[this.state.stage];

        return (
            <div>
                {header}
                {body}
                <div>
                    <button onClick={this.previousStage} disabled={this.state.isBackDisabled}>Back</button>
                    <button onClick={this.nextStage} disabled={this.state.isNextDisabled}>Next</button>
                </div>
            </div>
        );
    }
}
